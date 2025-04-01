"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
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
  t: (key: string) => string; // Add translation function to context
};

// Create the context with a default undefined value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create the provider component
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const [theme, setTheme] = useState<string>("Light");
  const [language, setLanguage] = useState<string>("English");
  const [savedTheme, setSavedTheme] = useState<string>("");
  const [savedLanguage, setSavedLanguage] = useState<string>("");

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
            setTheme(data.visualTheme);
            setLanguage(data.language);
            setSavedTheme(data.visualTheme);
            setSavedLanguage(data.language);
          }
        }
      } catch (error) {
        console.error("Error loading preferences:", error);
      }
    };

    loadPreferences();
  }, [session]);

  // Apply theme to document
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

  // Translation function
  const t = (key: string): string => {
    // Get translations for current language
    const translations = getTranslations(language);
    
    // Parse the key path (e.g., 'navBar.categories')
    const keys = key.split('.');
    let result: any = translations;
    
    // Navigate through nested objects
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        // If translation missing, return the key itself
        return key;
      }
    }
    
    return typeof result === 'string' ? result : key;
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
      t // Add translation function to the context
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