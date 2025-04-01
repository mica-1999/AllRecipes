import en from './en';
import pt from './pt';
import es from './es';

// Map language codes to their full translation objects
const translations = {
  English: en,
  Portuguese: pt,
  Spanish: es,
};

// Type for the translations
export type TranslationsType = typeof en;

// Language codes we support
export type SupportedLanguage = keyof typeof translations;

// Function to get translations based on language code
export function getTranslations(language: string): TranslationsType {
  // Return the requested language translations or fall back to English
  return translations[language as SupportedLanguage] || translations.English;
}