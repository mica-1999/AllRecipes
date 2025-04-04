export interface ColorSettingsProps {
    dietPreferences: string[];
    cuisinePreferences: string[];
    mealPreferences: string[];
    cookingPreferences: string[];
    customColors: {[key: string]: string};
    onColorChange: (id: string, value: string) => void;
    onColorReset: (id: string) => void;
}

export interface PreferencesSummaryProps {
    dietPreferences: string[];
    cuisinePreferences: string[];
    mealPreferences: string[];
    cookingPreferences: string[];
    customColors: {[key: string]: string};
}

export interface MealPreferencesProps {
    preferences: string[];
    customColors: {[key: string]: string};
    onPreferenceChange: (id: string) => void;
}

export interface DietPreferencesProps {
    preferences: string[];
    customColors: {[key: string]: string};
    onPreferenceChange: (id: string) => void;
}

export interface CuisinePreferencesProps {
    preferences: string[];
    customColors: {[key: string]: string};
    onPreferenceChange: (id: string) => void;
}

export interface CookingPreferencesProps {
    preferences: string[];
    customColors: {[key: string]: string};
    onPreferenceChange: (id: string) => void;
}
