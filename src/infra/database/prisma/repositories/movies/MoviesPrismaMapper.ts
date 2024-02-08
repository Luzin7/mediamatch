import Movie from "@module/movies/entities";
import { Movie as MoviePrisma, Prisma } from "@prisma/client";

export class MoviesPrismaMapper {
  static toEntity(raw: MoviePrisma): Movie {
    return Movie.create({
      genres: raw.genres,
      title: raw.title,
      originalTitle: raw.originalTitle,
      overview: raw.overview,
      releaseDate: raw.releaseDate,
      voteAverage: raw.voteAverage,
    });
  }

  static toPrisma(movie: Movie): Prisma.MovieUncheckedCreateInput {
    return {
      genres: movie.genres,
      title: movie.title,
      originalTitle: movie.originalTitle,
      overview: movie.overview,
      releaseDate: movie.releaseDate,
      voteAverage: movie.voteAverage,
    };
  }
}
