import { statusCodeMapper } from "@infra/http/statusCode/statusCodeMapper";
import { createSerieUseCase } from "@infra/implementations";
import { createSerieBodySchema } from "@infra/schemas/createSerieBodySchema";
import { Controller } from "@shared/core/infra/controller";
import { Request, Response } from "express";

export class CreateSerieController implements Controller {
  async handle(req: Request, res: Response): Promise<Response> {
    const { genres, originalTitle, overview, releaseDate, title, voteAverage } =
      createSerieBodySchema.parse(req.body);

    const serieReleaseDate = new Date(releaseDate);

    await createSerieUseCase.execute({
      genres,
      originalTitle,
      overview,
      releaseDate: serieReleaseDate,
      title,
      voteAverage,
    });

    return res.status(statusCodeMapper.Created).end();
  }
}
