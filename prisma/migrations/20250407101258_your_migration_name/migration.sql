/*
  Warnings:

  - You are about to drop the column `ingredients` on the `Recipe` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "ingredients";

-- CreateTable
CREATE TABLE "Ingredients" (
    "id" SERIAL NOT NULL,
    "ingredient" TEXT NOT NULL,
    "recipeid" INTEGER NOT NULL,

    CONSTRAINT "Ingredients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Ingredients_recipeId_idx" ON "Ingredients"("recipeid");

-- AddForeignKey
ALTER TABLE "Ingredients" ADD CONSTRAINT "Ingredients_recipeid_fkey" FOREIGN KEY ("recipeid") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
