import { Request, Response } from "express";
import { IMovieController } from "../interfaces/IMovieController";
import { IMovieService } from "../interfaces/IMovieService";
class MovieController implements IMovieController{
  private movieService: IMovieService
  constructor(movieService: IMovieService){
    this.movieService = movieService
  }
  public createMovie = async (req: Request, res: Response): Promise<void> => {
    let body = req.body
    let createMovie = await this.movieService.createMovie(body);
    res.status(createMovie.statusCode).json({msg: createMovie.msg})
  }

  public getMovies = async (req: Request, res: Response): Promise<void> => {
    const getMovies = await this.movieService.getMovies();
    res.status(200).json({msg: 'All the movies were successfully recovered', getMovies})
  }

  public updateMovie = async (req: Request, res: Response): Promise<void> => {
    const id: string = req.params.id
    let body = req.body
    const updateMovie = await this.movieService.updateMovie(id, body)
    res.status(updateMovie.statusCode).json({msg: updateMovie.msg})
  }

  public deleteMovie = async(req: Request, res: Response): Promise<void> =>{
    const id: string = req.params.id
    const deleteMovie = await this.movieService.deleteMovie(id)
    res.status(200).json({msg: 'The movie was deleted successfully', deleteMovie})
  }

}


export default MovieController


