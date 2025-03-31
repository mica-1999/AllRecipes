-- CreateEnum
CREATE TYPE "VisualTheme" AS ENUM ('Light', 'Dark', 'Auto');

-- CreateEnum
CREATE TYPE "language" AS ENUM ('English', 'Spanish', 'Portuguese');

-- AlterTable
ALTER TABLE "UserPreferences" ALTER COLUMN "visualTheme" SET DEFAULT 'Light',
ALTER COLUMN "language" SET DEFAULT 'English';
