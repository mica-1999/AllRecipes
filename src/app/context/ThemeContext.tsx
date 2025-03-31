"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

// Define the shape of our context
type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
  language: string;
  setLanguage: (language: string) => void;
};

// Create the context with a default undefined value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create the provider component
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const [theme, setTheme] = useState<string>("Light");
  const [language, setLanguage] = useState<string>("English");

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

      // Listen for system changes
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

  return (
    <ThemeContext.Provider value={{ theme, setTheme, language, setLanguage }}>
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