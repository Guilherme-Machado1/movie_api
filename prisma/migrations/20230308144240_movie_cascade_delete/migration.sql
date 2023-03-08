-- DropForeignKey
ALTER TABLE "MovieReview" DROP CONSTRAINT "MovieReview_movieId_fkey";

-- AddForeignKey
ALTER TABLE "MovieReview" ADD CONSTRAINT "MovieReview_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
