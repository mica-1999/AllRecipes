/*
  Warnings:

  - The `season` column on the `Recipe` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "seasons" AS ENUM ('Spring', 'Summer', 'Fall', 'Winter', 'All');

-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "season",
ADD COLUMN     "season" "seasons";
