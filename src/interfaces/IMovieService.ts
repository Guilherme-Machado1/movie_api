import { Movie } from "@prisma/client";
import { IResponse } from "./Protocols";
export interface IMovieService{
  createMovie(movieData: Movie): Promise<IResponse>
  getMovies(): Promise<Movie[]>
  updateMovie(id: string, movieData: Movie): Promise<IResponse>
  deleteMovie(id: string): Promise<IResponse>
  getMovieById(id: string): Promise<Movie | null>
}
