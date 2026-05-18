/*
  Warnings:

  - The values [MEAT,SNACK,BBQ] on the enum `FoodCategory` will be removed. If these variants are still used in the database, this will fail.

*/
-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('BBQ', 'WEDDING', 'CORPORATE', 'BIRTHDAY');

-- AlterEnum
BEGIN;
CREATE TYPE "FoodCategory_new" AS ENUM ('PROTEIN', 'SIDE_DISH', 'APPETIZER', 'DRINK', 'DESSERT', 'SALAD', 'FRUIT', 'UTENSIl');
ALTER TABLE "food_items" ALTER COLUMN "category" TYPE "FoodCategory_new" USING ("category"::text::"FoodCategory_new");
ALTER TYPE "FoodCategory" RENAME TO "FoodCategory_old";
ALTER TYPE "FoodCategory_new" RENAME TO "FoodCategory";
DROP TYPE "FoodCategory_old";
COMMIT;

-- CreateTable
CREATE TABLE "EventConsumptionModifier" (
    "id" SERIAL NOT NULL,
    "eventType" "EventType" NOT NULL,
    "multiplier" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventConsumptionModifier_pkey" PRIMARY KEY ("id")
);
