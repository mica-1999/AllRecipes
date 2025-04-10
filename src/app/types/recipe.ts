import { difficulty, cuisineType, mealType, dietaryRestrictions, cookingMethod, seasons, occasion } from "@prisma/client";

// Define the Recipe interface based on your Prisma schema
export interface Recipe {
  id: number;
  title: string;
  description: string;
  instructions: string[];
  cooktime?: number | null;
  difficulty: difficulty;
  image: string;
  rating?: number | null;
  season?: seasons | null;
  categorytype: string;
  cuisinetype: cuisineType;
  mealtype: mealType;
  dietaryrestrictions: dietaryRestrictions[];
  numcalories?: number | null;
  cookingmethod?: cookingMethod | null;
  occasions: occasion[];
  servings?: number | null;
  viewcount: number;
  createdat: string;
  updatedat: string;
  userid: number;
  // Relationships
  Ingredients?: { id: number; ingredient: string; recipeid: number }[];
}

// Additional types for MyList features
export interface PrepareRecipe {
  id: number;
  recipeid: number;
  userid: number;
  dateAdded: string;
  lastPrepared?: string | null;
  Recipe: Recipe;
}

export interface Bookmark {
  id: number;
  recipeid: number;
  userid: number;
  dateAdded: string;
  Recipe: Recipe;
}

export interface Collection {
  id: number;
  name: string;
  createdat: string;
  updatedat: string;
  userid: number;
  recipes?: CollectionRecipe[];
}

export interface CollectionRecipe {
  id: number;
  collectionid: number;
  recipeid: number;
  Recipe: Recipe;
}

export interface Comment {
  id: number;
  recipeid: number;
  userid: number;
  content: string;
  createdat: string;
  Recipe: Recipe;
  User?: {
    id: number;
    username: string;
    firstname?: string;
    lastname?: string;
  };
}

export interface FilterParams {
  cuisine?: string;
  mealType?: string;
  cookingTime?: string;
  diet?: string;
  difficulty?: string;
  caloriesMin?: string;
  caloriesMax?: string;
  method?: string;
  occasion?: string;
  season?: string;
  ingredients?: string;
  sortBy?: string;
  sortOrder?: string;
}