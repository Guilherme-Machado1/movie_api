import { Movie } from "@prisma/client";
import { IReviewInfo } from "./IReviewInfo";
import { IResponse } from "./Protocols";

export interface IReviewService{
  reviewMovie(id: string, reviewInfo: IReviewInfo): Promise<IResponse>
  isReviewed(): Promise<Movie[]>
}
