/*
  Warnings:

  - You are about to drop the column `movieId` on the `Review` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_movieId_fkey";

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "movieId";

-- CreateTable
CREATE TABLE "MovieReview" (
    "id" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,
    "reviewId" TEXT NOT NULL,

    CONSTRAINT "MovieReview_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MovieReview" ADD CONSTRAINT "MovieReview_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieReview" ADD CONSTRAINT "MovieReview_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
