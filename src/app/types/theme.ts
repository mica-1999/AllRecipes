// Define the shape of our context
export type ThemeContextType = {
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
  isLoading: boolean;
};

// Define interfaces for translation structure
export interface NestedTranslations {
  [key: string]: string | NestedTranslations | Array<unknown>;
}

export interface Translations {
  [key: string]: NestedTranslations;
}
