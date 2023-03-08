import { IMovieService } from "../interfaces/IMovieService";
import { Movie } from "@prisma/client";
import { badRequest, serverError, success } from "../helper/returnFunctions";
import { IResponse } from "../interfaces/Protocols";
import { PrismaClient } from "@prisma/client";

class MovieService implements IMovieService {
  private prisma: PrismaClient;
  constructor(){
    this.prisma = new PrismaClient();
  }
  public async createMovie(movieData: Movie): Promise<IResponse> {
    let age = [0, 12, 14, 16, 18];
    if(
        movieData.classification
        &&
        !age.includes(movieData.classification!)
      )
    {
      return badRequest('The classification value is not valid')
    }

    try {
      await this.prisma.movie.create({data: movieData});
      return success('Movie inserted successfully');
    } catch (error) {
      console.log(error)
      return serverError("Internal Error")
    }

  }

  public async getMovies(): Promise<Movie[]> {
    try {
      const getList = await this.prisma.movie.findMany();
      return getList
    } catch (error) {
      console.log(error)
      return serverError("Internal Error")
    }

  }

  public async  getMovieById(id: string): Promise<Movie | null> {
    try {
      const getList = await this.prisma.movie.findUnique({
        where: {
          id: id
        }
      });
      return getList
    } catch (error) {
      console.log(error)
      return serverError("Internal Error")
    }


  }

  public async updateMovie(id: string, movieData: Movie): Promise<IResponse> {
    const {title, classification, description, duration} = movieData

    const verifyId = await this.getMovieById(id);
    if(!verifyId) return badRequest("Id is not valid")

    try {
      await this.prisma.movie.update({
        where: {
          id: id,
        },
        data: {
          classification: classification,
          title: title,
          description: description,
          duration: duration,
        },
      })
      return success("The movie was updated");
    } catch (error) {
      console.log(error)
      return serverError("Internal Error")
    }

  }

  public async deleteMovie(id: string): Promise<IResponse> {
    const verifyId = await this.getMovieById(id);
    if(!verifyId) return badRequest("Id is not valid")

    try {
      await this.prisma.movie.delete({where: {
        id: id,
      }})
      return success('The movie was deleted')
    } catch (error) {
      console.log(error)
      return serverError("Internal Error")
    }
  }

}

export default MovieService
