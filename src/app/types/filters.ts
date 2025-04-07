export interface CaloriesRangeType {
    min: number;
    max: number;
}

export interface TableFilteredProps {
    mainFilterMenu: string;
    cuisineFilter: string[];
    mealType: string[];
    cookingTime: number;
    dietaryRestrictions: string[];
    exactMatchDiet: boolean;
    ingredients: string[];
    exactMatchIngredients: boolean;
    difficultyLevel: string;
    caloriesRange: CaloriesRangeType;
    cookingMethod: string[];
    occasion: string[];
    exactMatchOccasion: boolean;
    seasonChoice: string;
    onResetFilters?: () => void;
}

export interface MealOptionsProps {
    cuisineFilter: string[];
    setCuisineFilter: (value: string[]) => void;
}

export interface MealTypeProps {
    mealType: string[];
    setMealType: (value: string[]) => void;
}

export interface CookingTimeProps {
    cookingTime: number;
    setCookingTime: (value: number) => void;
}

export interface DietaryRestrictionsProps {
    dietaryRestrictions: string[];
    setDietaryRestrictions: (value: string[]) => void;
    exactMatchDiet: boolean;
    setExactMatchDiet: (exactMatchDiet: boolean) => void;
}

export interface IngredientsProps {
    ingredients: string[];
    setIngredients: (value: string[]) => void;
    exactMatchIngredients: boolean;
    setExactMatchIngredients: (exactMatchIngredients: boolean) => void;
}

export interface DifficultyLevelProps {
    difficultyLevel: string;
    setDifficultyLevel: (value: string) => void;
}

export interface CaloriesRangeProps {
    caloriesRange: CaloriesRangeType;
    setCaloriesRange: (value: CaloriesRangeType) => void;
}

export interface CookingMethodProps {
    cookingMethod: string[];
    setCookingMethod: (value: string[]) => void;
}

export interface OccasionProps {
    occasion: string[];
    setOccasion: (value: string[]) => void;
    exactMatchOccasion: boolean;
    setExactMatchOccasion: (exactMatchOccasion: boolean) => void;
}

export interface FilterModeToggleProps {
    isExactMatch: boolean;
    setIsExactMatch: (value: boolean) => void;
    tooltipText?: {
      all: string;
      any: string;
    };
  }