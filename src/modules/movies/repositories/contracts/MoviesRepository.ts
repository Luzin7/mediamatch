import Movie from "@module/movies/entities";

export abstract class MoviesRepository {
  abstract create(movie: Movie): Promise<void>;
  abstract findById(id: number): Promise<Movie | null>;
  abstract findByName(email: string): Promise<Movie | null>;
  // abstract delete(id: string): Promise<void>
}
