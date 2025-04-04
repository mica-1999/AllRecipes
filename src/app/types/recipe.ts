import { difficulty, cuisineType, mealType, dietaryRestrictions, cookingMethod } from "@prisma/client";

// Define the Recipe interface based on your Prisma schema
export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  cooktime?: number | null;
  difficulty: difficulty;
  image: string;
  rating?: number | null;
  season?: string | null;
  categorytype: string;
  cuisinetype: cuisineType;
  mealtype: mealType;
  dietaryrestrictions: dietaryRestrictions[];
  numcalories?: number | null;
  cookingmethod?: cookingMethod | null;
  occasions: string[];
  servings?: number | null;
  viewcount: number;
  createdat: string;
  updatedat: string;
  userid: number;
}
