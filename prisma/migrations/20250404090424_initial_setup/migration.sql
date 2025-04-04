-- CreateEnum
CREATE TYPE "VisualTheme" AS ENUM ('Light', 'Dark', 'Auto');

-- CreateEnum
CREATE TYPE "language" AS ENUM ('English', 'Spanish', 'Portuguese');

-- CreateEnum
CREATE TYPE "difficulty" AS ENUM ('Easy', 'Medium', 'Hard');

-- CreateEnum
CREATE TYPE "cuisineType" AS ENUM ('Italian', 'Chinese', 'Mexican', 'Indian', 'Japanese', 'Thai', 'French', 'Greek', 'Spanish', 'Mediterranean', 'American', 'Korean', 'Vietnamese', 'MiddleEastern', 'Brazilian');

-- CreateEnum
CREATE TYPE "mealType" AS ENUM ('Breakfast', 'Lunch', 'Dinner', 'Brunch', 'Snack', 'Dessert');

-- CreateEnum
CREATE TYPE "dietaryRestrictions" AS ENUM ('Vegetarian', 'Vegan', 'GlutenFree', 'DairyFree', 'NutFree', 'LowCarb');

-- CreateEnum
CREATE TYPE "cookingMethod" AS ENUM ('Baking', 'Frying', 'Grilling', 'Steaming', 'Boiling', 'Roasting', 'SlowCooking');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "role" TEXT NOT NULL DEFAULT 'viewer',
    "isactive" TEXT NOT NULL DEFAULT 'pending',
    "lastlogin" TIMESTAMP(6),
    "createdat" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "job" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPreferences" (
    "id" SERIAL NOT NULL,
    "visualtheme" "VisualTheme" NOT NULL DEFAULT 'Light',
    "language" "language" NOT NULL DEFAULT 'English',
    "userid" INTEGER NOT NULL,

    CONSTRAINT "UserPreferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "createdat" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recipe" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ingredients" TEXT[],
    "instructions" TEXT[],
    "cooktime" INTEGER,
    "difficulty" "difficulty" NOT NULL,
    "image" TEXT NOT NULL,
    "rating" DOUBLE PRECISION,
    "season" TEXT,
    "categorytype" TEXT NOT NULL,
    "cuisinetype" "cuisineType" NOT NULL,
    "mealtype" "mealType" NOT NULL,
    "dietaryrestrictions" "dietaryRestrictions"[],
    "numcalories" INTEGER,
    "cookingmethod" "cookingMethod",
    "occasions" TEXT[],
    "servings" INTEGER,
    "viewcount" INTEGER NOT NULL DEFAULT 0,
    "createdat" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "street" TEXT,
    "city" TEXT,
    "state" TEXT,
    "postalcode" TEXT,
    "country" TEXT,
    "userid" INTEGER,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_username_idx" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "UserPreferences_userid_key" ON "UserPreferences"("userid");

-- CreateIndex
CREATE INDEX "Session_userId_idx" ON "Session"("userid");

-- CreateIndex
CREATE INDEX "Recipe_cuisineType_idx" ON "Recipe"("cuisinetype");

-- CreateIndex
CREATE INDEX "Recipe_mealType_idx" ON "Recipe"("mealtype");

-- CreateIndex
CREATE INDEX "Recipe_userId_idx" ON "Recipe"("userid");

-- CreateIndex
CREATE UNIQUE INDEX "Address_userid_key" ON "Address"("userid");

-- AddForeignKey
ALTER TABLE "UserPreferences" ADD CONSTRAINT "UserPreferences_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
