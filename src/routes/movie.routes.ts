import { Router } from "express";
import MovieService from "../services/MovieService";
import { IMovieController } from "../interfaces/IMovieController";
import MovieController from "../controllers/MovieController";
class MovieRouter {
  private router: Router;
  private movieController: IMovieController;
  constructor(){
    this.router = Router();
    const movieService = new MovieService();
    this.movieController = new MovieController(movieService);
    this.setupRoutes();
  }

  private setupRoutes(): void{
    this.router.get("/", this.movieController.getMovies);
    this.router.post("/create", this.movieController.createMovie);
    this.router.delete("/delete/:id", this.movieController.deleteMovie);
    this.router.put("/update/:id", this.movieController.updateMovie);
    // this.router.post("/review/:id", this.movieController.reviewMovie);
    // this.router.get("/moviesnotreviewd", this.movieController.moviesNotReviewd);
  }

  public getRouter(): Router {
    return this.router;
  }
}

const movieRouter = new MovieRouter().getRouter();
export default movieRouter
