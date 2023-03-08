import { Request, Response } from "express";
import { IMovieController } from "../interfaces/IMovieController";
import { IMovieService } from "../interfaces/IMovieService";
import { IReviewController } from "../interfaces/IReviewController";
import { IReviewService } from "../interfaces/IReviewService";
class ReviewController implements IReviewController{
  private reviewService: IReviewService
  constructor(reviewService: IReviewService){
    this.reviewService = reviewService
  }
  public reviewMovie  = async (req: Request, res: Response): Promise<void> => {
    const id: string = req.params.id
    let body = req.body
    const addReview = await this.reviewService.reviewMovie(id, body)
    res.status(addReview.statusCode).json({msg: addReview.msg})
  }

  public moviesNotReviewed  = async (req: Request, res: Response): Promise<void> => {

    const addReview = await this.reviewService.isReviewed()
    res.status(200).json({msg: 'Your review was added', addReview})
  }

}


export default ReviewController


