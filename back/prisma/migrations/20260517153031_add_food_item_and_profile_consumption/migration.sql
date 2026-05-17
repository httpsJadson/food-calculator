-- CreateEnum
CREATE TYPE "FoodCategory" AS ENUM ('MEAT', 'SIDE_DISH', 'DRINK', 'DESSERT', 'SNACK', 'BBQ', 'SALAD');

-- CreateEnum
CREATE TYPE "MeasurementUnit" AS ENUM ('GRAM', 'KILOGRAM', 'MILLILITER', 'LITER', 'UNIT');

-- CreateTable
CREATE TABLE "food_items" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category" "FoodCategory" NOT NULL,
    "unit" "MeasurementUnit" NOT NULL,
    "consumptionPerPerson" DOUBLE PRECISION NOT NULL,
    "wastePercentage" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "packageSize" DOUBLE PRECISION,
    "unitCost" DECIMAL(10,2),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "food_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consumption_profiles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "adultEquivalent" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "consumption_profiles_pkey" PRIMARY KEY ("id")
);
