/*
  Warnings:

  - The `occasions` column on the `Recipe` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "occasion" AS ENUM ('Birthday', 'Holiday', 'Casual', 'DateNight', 'Thanksgiving', 'Christmas', 'Wedding', 'BBQ', 'GameDay', 'Picnic', 'Brunch', 'Potluck');

-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "occasions",
ADD COLUMN     "occasions" "occasion"[];
