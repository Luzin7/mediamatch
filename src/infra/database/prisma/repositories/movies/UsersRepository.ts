import { prisma } from "@infra/database/createConnection";
import Movie from "@module/movies/entities";
import { MoviesRepository } from "@module/movies/repositories/contracts/MoviesRepository";
import { MoviesPrismaMapper } from "./MoviesPrismaMapper";

export class MoviesRepositoryImplementation implements MoviesRepository {
  async create(movie: Movie): Promise<void> {
    await prisma.movie.create({
      data: MoviesPrismaMapper.toPrisma(movie),
    });
  }

  async findById(id: number): Promise<Movie | null> {
    const movie = await prisma.movie.findUnique({
      where: { id },
    });

    if (!movie) {
      return null;
    }

    return MoviesPrismaMapper.toEntity(movie);
  }

  async findByName(email: string): Promise<Movie | null> {
    throw new Error("Method not implemented.");
  }
}
