/*
  Warnings:

  - The `ingredients` column on the `Recipe` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `instructions` column on the `Recipe` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `visualTheme` column on the `UserPreferences` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `language` column on the `UserPreferences` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `categoryType` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cuisineType` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `difficulty` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mealType` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "difficulty" AS ENUM ('Easy', 'Medium', 'Hard');

-- CreateEnum
CREATE TYPE "cuisineType" AS ENUM ('Italian', 'Chinese', 'Mexican', 'Indian', 'Japanese', 'Thai', 'French', 'Greek', 'Spanish', 'Mediterranean', 'American', 'Korean', 'Vietnamese', 'MiddleEastern', 'Brazilian');

-- CreateEnum
CREATE TYPE "mealType" AS ENUM ('Breakfast', 'Lunch', 'Dinner', 'Brunch', 'Snack', 'Dessert');

-- CreateEnum
CREATE TYPE "dietaryRestrictions" AS ENUM ('Vegetarian', 'Vegan', 'GlutenFree', 'DairyFree', 'NutFree', 'LowCarb');

-- CreateEnum
CREATE TYPE "cookingMethod" AS ENUM ('Baking', 'Frying', 'Grilling', 'Steaming', 'Boiling', 'Roasting', 'Sautéing', 'SlowCooking');

-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "categoryType" TEXT NOT NULL,
ADD COLUMN     "cookTime" INTEGER,
ADD COLUMN     "cookingMethod" "cookingMethod",
ADD COLUMN     "cuisineType" "cuisineType" NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "dietaryRestrictions" "dietaryRestrictions"[],
ADD COLUMN     "difficulty" "difficulty" NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "mealType" "mealType" NOT NULL,
ADD COLUMN     "numCalories" INTEGER,
ADD COLUMN     "occasions" TEXT[],
ADD COLUMN     "rating" DOUBLE PRECISION,
ADD COLUMN     "season" TEXT,
ADD COLUMN     "servings" INTEGER,
ADD COLUMN     "viewCount" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "ingredients",
ADD COLUMN     "ingredients" TEXT[],
DROP COLUMN "instructions",
ADD COLUMN     "instructions" TEXT[];

-- AlterTable
ALTER TABLE "UserPreferences" DROP COLUMN "visualTheme",
ADD COLUMN     "visualTheme" "VisualTheme" NOT NULL DEFAULT 'Light',
DROP COLUMN "language",
ADD COLUMN     "language" "language" NOT NULL DEFAULT 'English';
