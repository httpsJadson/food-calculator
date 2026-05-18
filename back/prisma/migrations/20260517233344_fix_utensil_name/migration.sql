/*
  Warnings:

  - The values [UTENSIl] on the enum `FoodCategory` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "FoodCategory_new" AS ENUM ('PROTEIN', 'SIDE_DISH', 'APPETIZER', 'DRINK', 'DESSERT', 'SALAD', 'FRUIT', 'UTENSIL');
ALTER TABLE "food_items" ALTER COLUMN "category" TYPE "FoodCategory_new" USING ("category"::text::"FoodCategory_new");
ALTER TYPE "FoodCategory" RENAME TO "FoodCategory_old";
ALTER TYPE "FoodCategory_new" RENAME TO "FoodCategory";
DROP TYPE "FoodCategory_old";
COMMIT;
