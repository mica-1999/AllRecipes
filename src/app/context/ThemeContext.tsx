"use client"

import { createContext, useContext, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { getTranslations } from '@/app/translations/translationUtils';

// Define the shape of our context
type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
  language: string;
  setLanguage: (language: string) => void;
  savedTheme: string;
  setSavedTheme: (theme: string) => void;
  savedLanguage: string;
  setSavedLanguage: (language: string) => void;
  t: (key: string) => string;
  tArray: <T>(key: string) => T[];
  isLoading: boolean; // Add this
};

// Define interfaces for our translation structure
interface NestedTranslations {
  [key: string]: string | NestedTranslations | Array<unknown>;
}

interface Translations {
  [key: string]: NestedTranslations;
}

// Create the context with a default undefined value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create the provider component
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(true);

  // Initialize from localStorage with fallback values
  const [theme, setTheme] = useState<string>(() => {  
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || "Light";
    }
    return "Light";
  });
  
  const [language, setLanguage] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || "English";
    }
    return "English";
  });
  
  const [savedTheme, setSavedTheme] = useState<string>(theme);
  const [savedLanguage, setSavedLanguage] = useState<string>(language);
  
  // Load preferences when session is available
  useEffect(() => {
    const loadPreferences = async () => {
      if (!session?.user?.id) return;
      
      try {
        const response = await fetch(`/api/preferences?userId=${session.user.id}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        });

        if (response.ok) {
          const data = await response.json();
          if (data) {
            setTheme(data.visualtheme);
            setLanguage(data.language);
            setSavedTheme(data.visualtheme);
            setSavedLanguage(data.language);

            // Store in localStorage for future reference
            if (typeof window !== 'undefined') {
              localStorage.setItem('theme', data.visualtheme);
              localStorage.setItem('language', data.language);
            }
          }
        }
      } catch (error) {
        console.error("Error loading preferences:", error);
      }
    };

    loadPreferences();
  }, [session]);

  // Apply theme to document - still needed for theme changes after initial load
  useEffect(() => {
    if (theme === "Dark") {
      document.documentElement.classList.add('dark');
    } else if (theme === "Light") {
      document.documentElement.classList.remove('dark');
    } else if (theme === "Auto") {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      // Listen for system changes on auto
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  // Add a useEffect to control loading state
  useEffect(() => {
    // This will run after hydration is complete
    setIsLoading(false);
  }, []);

  // Rest of your translation functions remain the same...
  const t = (key: string): string => {
    // Get translations for current language
    const translations = getTranslations(language) as Translations;
    
    // Parse the key path (e.g., 'navBar.categories')
    const keys = key.split('.');
    let result: string | NestedTranslations | Array<unknown> = translations;
    
    // Navigate through nested objects
    for (const k of keys) {
      if (
        result && 
        typeof result === 'object' && 
        !Array.isArray(result) && 
        k in result
      ) {
        result = result[k];
      } else {
        // If translation missing, return the key itself
        return key;
      }
    }
    
    return typeof result === 'string' ? result : key;
  };

  // Translation function for arrays
  const tArray = <T,>(key: string): T[] => {
    const translations = getTranslations(language) as Translations;
    const keys = key.split('.');
    let result: string | NestedTranslations | Array<unknown> = translations;
    
    for (const k of keys) {
      if (
        result && 
        typeof result === 'object' && 
        !Array.isArray(result) && 
        k in result
      ) {
        result = result[k];
      } else {
        return [] as T[];
      }
    }
    
    return Array.isArray(result) ? result as T[] : [] as T[];
  };

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      setTheme, 
      language, 
      setLanguage, 
      savedTheme, 
      setSavedTheme, 
      savedLanguage, 
      setSavedLanguage,
      t,
      tArray,
      isLoading
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Create a custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}