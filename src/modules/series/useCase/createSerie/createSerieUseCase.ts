import Serie from "@module/series/entities";
import { SeriesRepository } from "@module/series/repositories/contracts/SeriesRepository";
import { Either, right } from "@shared/core/errors/Either";
import { UseCase } from "@shared/core/modules/UseCase";

interface Request {
  title: string;
  originalTitle: string;
  overview: string;
  genres: string[];
  releaseDate: Date;
  voteAverage: number;
}

type Response = Either<
  null,
  {
    serie: Serie;
  }
>;

export class CreateSerieUseCase implements UseCase<Request, Response> {
  constructor(private readonly seriesRepository: SeriesRepository) {}
  async execute({
    genres,
    originalTitle,
    overview,
    releaseDate,
    title,
    voteAverage,
  }: Request): Promise<Response> {
    const newSerie = Serie.create({
      genres,
      originalTitle,
      overview,
      releaseDate,
      title,
      voteAverage,
    });
    this.seriesRepository.create(newSerie);

    return right({ serie: newSerie });
  }
}
