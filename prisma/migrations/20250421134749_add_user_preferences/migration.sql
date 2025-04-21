-- AlterTable
ALTER TABLE "UserPreferences" ADD COLUMN     "cookingPreferences" "cookingMethod"[],
ADD COLUMN     "cuisinePreferences" "cuisineType"[],
ADD COLUMN     "dietPreferences" "dietaryRestrictions"[],
ADD COLUMN     "mealPreferences" "mealType"[];
