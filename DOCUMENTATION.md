# Mom Recipes App Documentation

Mom Recipes App is a web application for storing and sharing family recipes. Users can add their favorite recipes, browse others' contributions, and interact through comments and likes. The app provides a user-friendly interface with personalized features.

## Core Components

### Root Layout
The root layout (`layout.tsx`) sets up the application's global structure:

- **ToastContainer**: Imported from 'react-toastify' to implement a notification system across the app. This allows displaying user-friendly messages, alerts, and confirmations (such as successful recipe submissions, login confirmations, or error notifications) without creating custom notification components.

- **NextAuthSessionProvider**: A client-side component wrapper around Next Auth's SessionProvider. This component is isolated in a separate file because it needs the "use client" directive, keeping the server component layout clean while providing authentication context to the entire application.

- **ThemeProvider**: A context provider that makes theme-related attributes and functionality available to all child components. This enables consistent theme application throughout the app and allows components to react to theme changes without passing props through the entire component tree.

- **Theme Flash Prevention Script**: Uses `dangerouslySetInnerHTML` to inject an immediately executing script that runs before React hydration. This prevents the "flash of incorrect theme" by checking localStorage for theme preferences and applying the appropriate class to the document root as early as possible in the page load lifecycle. This approach is necessary because standard React code would execute too late in the rendering process, resulting in a visible theme switch.

### Global Styles
The global styles (`globals.css`) establish the base styling for the application:

- **Dark Mode Implementation**: To enable Tailwind dark mode with the `.dark` class selector, a custom variant was defined using `@custom-variant dark (&:where(.dark, .dark *))`. This required installing an additional package (lightningcss or another CSS preprocessor) to properly parse and compile the custom variant syntax.

- **CSS Variables**: Defines root variables for background and foreground colors to maintain consistent theming.

- **Theme-specific Styling**: Applies different background and text colors based on whether the dark theme is active.

- **Utility Classes**: Includes reusable styles like loader animations and overlay handling for modals.

### Theme Context
The ThemeContext (`context/ThemeContext.tsx`) manages theme settings and translations:

- **State Management**: 
  - Maintains current theme and language preferences with useState
  - Keeps a backup of saved preferences (savedTheme/savedLanguage) for comparison
  - Tracks loading state during initialization

- **Preference Initialization**:
  - Retrieves settings from localStorage on initial load
  - Provides default values (Light theme/English language) when no preferences exist

- **User Preferences Sync**:
  - Fetches user preferences from backend API when user is logged in
  - Updates context state and localStorage with user settings
  - Preserves preferences between sessions

- **Theme Application**:
  - Adds/removes 'dark' class from document root based on theme preference
  - Supports "Auto" mode that respects system color scheme preference
  - Adds event listeners to detect system theme changes when in "Auto" mode

- **Translation Functions**:
  - `t(key)`: Retrieves nested translation strings by dot-notation path
  - `tArray(key)`: Specifically handles array-type translations
  - Both functions navigate through nested translation objects to find the right string

- **Context Consumption**:
  - Exports a `useTheme()` hook to easily access context values
  - Includes error handling when used outside a ThemeProvider

### Translation System
The translation utilities (`translations/translationUtils.ts`) provide internationalization support:

- **Language Files**: Imports translation objects from separate files (`en.ts`, `pt.ts`, `es.ts`) containing localized text for English, Portuguese and Spanish.

- **Central Access Point**: Creates a unified object that maps language names to their corresponding translation data.

- **Type Safety**: Provides TypeScript types to ensure consistent translation structure across languages.

- **Language Selection**: Exports a `getTranslations` function that retrieves the appropriate translation object based on the selected language.

- **Fallback Handling**: If a requested language isn't available, defaults to English to prevent application errors.



### Reusable Components

#### Click Outside Hook
The `useClickOutside` hook detects clicks outside a specified element and closes UI components like dropdowns when users click elsewhere. It attaches event listeners that automatically clean up when components unmount, preventing memory leaks.