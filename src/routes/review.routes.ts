import { Router } from "express";
import MovieService from "../services/MovieService";
import { IReviewController } from "../interfaces/IReviewController";
import ReviewController from "../controllers/ReviewController";
import ReviewService from '../services/ReviewService'
class ReviewRouter {
  private router: Router;
  private reviewController: IReviewController;
  constructor(){
    this.router = Router();
    const movieService = new MovieService();
    const reviewService = new ReviewService(movieService);
    this.reviewController = new ReviewController(reviewService);
    this.setupRoutes();
  }

  private setupRoutes(): void{
    this.router.post("/review/:id", this.reviewController.reviewMovie);
    this.router.get("/moviesnotreviewed", this.reviewController.moviesNotReviewed);
  }

  public getRouter(): Router {
    return this.router;
  }
}

const reviewRouter = new ReviewRouter().getRouter();
export default reviewRouter
