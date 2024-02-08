import { statusCodeMapper } from "@infra/http/statusCode/statusCodeMapper";
import { createMovieUseCase } from "@infra/implementations";
import { createMovieBodySchema } from "@infra/schemas/createMovieBodySchema";
import { Controller } from "@shared/core/infra/controller";
import { Request, Response } from "express";

export class CreateMovieController implements Controller {
  async handle(req: Request, res: Response): Promise<Response> {
    const { genres, originalTitle, overview, releaseDate, title, voteAverage } =
      createMovieBodySchema.parse(req.body);

    const movieReleaseDate = new Date(releaseDate);

    await createMovieUseCase.execute({
      genres,
      originalTitle,
      overview,
      releaseDate: movieReleaseDate,
      title,
      voteAverage,
    });

    return res.status(statusCodeMapper.Created).end();
  }
}
