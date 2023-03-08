/*
  Warnings:

  - The `rating` column on the `movies` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "movies" DROP COLUMN "rating",
ADD COLUMN     "rating" INTEGER[];
