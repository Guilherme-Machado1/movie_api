import { IMovieService } from "../interfaces/IMovieService";
import { Movie, MovieReview, PrismaClient } from "@prisma/client";
import { badRequest, forbidden, serverError, success } from "../helper/returnFunctions";
import { IReviewService } from "../interfaces/IReviewService";
import { IResponse } from "../interfaces/Protocols";
import { IReviewInfo } from "../interfaces/IReviewInfo";

class ReviewService implements IReviewService{
  private movieService: IMovieService
  private prisma: PrismaClient;

  constructor(movieService: IMovieService){
    this.movieService = movieService
    this.prisma = new PrismaClient();
  }

  public async reviewMovie(id: string, reviewInfo: IReviewInfo): Promise<IResponse> {
    const {rate, comment} = reviewInfo;

    if(!id || !rate || !comment){
      return badRequest("Missing data")
    }

    const verifyId = await this.movieService.getMovieById(id);
    if(!verifyId) return badRequest("Id is not valid")


    if(reviewInfo.rate > 5){
      return forbidden("The Max rate available is 5")
    }
    try {

      await this.prisma.movieReview.create({
        data: {
          review: {
            create: {
              rating: reviewInfo.rate,
              comment: reviewInfo.comment,
            }
          },
          movie: {
            connect: { id: id }
          }
        },
        include: {
          review: true
        }
      })

      return success("Your Review was inserted successfully");
    } catch (error) {
      console.log(error)
      return serverError("Internal Error")
    }
  }

  public async isReviewed(): Promise<Movie[]> {
    try {
      const getMovies = await this.prisma.movie.findMany({
          include: {
          reviews: true
        }
      })

      const moviesNotReviewed: (Movie & { reviews: MovieReview[]; })[] = [];

      getMovies.map(function(movie) {
        if(movie.reviews.length === 0){
          moviesNotReviewed.push(movie)
        }
      });

      return moviesNotReviewed;
    } catch (error) {
      console.log(error)
      return serverError("Internal Error")
    }
  }
}

export default ReviewService
