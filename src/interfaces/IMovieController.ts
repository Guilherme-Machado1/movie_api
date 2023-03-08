import { Request, Response } from "express";
export interface IMovieController{
  createMovie(req: Request, res: Response): Promise<void>
  getMovies(req: Request, res: Response): Promise<void>
  updateMovie(req: Request, res: Response): Promise<void>
  deleteMovie(req: Request, res: Response): Promise<void>
}
