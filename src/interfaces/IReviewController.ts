import { Request, Response } from "express";
export interface IReviewController{
  reviewMovie(req: Request, res: Response): Promise<void>
  moviesNotReviewed(req: Request, res: Response): Promise<void>
}
