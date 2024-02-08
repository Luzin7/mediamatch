import Movie from "@module/movies/entities";
import { MoviesRepository } from "@module/movies/repositories/contracts/MoviesRepository";
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
    movie: Movie;
  }
>;

export class CreateMovieUseCase implements UseCase<Request, Response> {
  constructor(private readonly moviesRepository: MoviesRepository) {}
  async execute({
    genres,
    originalTitle,
    overview,
    releaseDate,
    title,
    voteAverage,
  }: Request): Promise<Response> {
    const newMovie = Movie.create({
      genres,
      originalTitle,
      overview,
      releaseDate,
      title,
      voteAverage,
    });
    this.moviesRepository.create(newMovie);

    return right({ movie: newMovie });
  }
}
