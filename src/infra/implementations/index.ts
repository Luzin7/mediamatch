import { MoviesRepositoryImplementation } from "@infra/database/prisma/repositories/movies/UsersRepository";
import { SeriesRepositoryImplementation } from "@infra/database/prisma/repositories/series/SeriesRepositoryImplementation";
import { UsersRepositoryImplementation } from "@infra/database/prisma/repositories/users/UsersRepository";
import CreateMovieUseCase from "@module/movies/useCase/createMovie";
import CreateSerieUseCase from "@module/series/useCase/createSerie";
import CreateUserUseCase from "@module/users/useCase/createUser";
import { CryptographyProviderImplementation } from "@providers/cryptography/implementations/CryptographyProviderImplementation";

export const createUserUseCase = new CreateUserUseCase(
  new UsersRepositoryImplementation(),
  new CryptographyProviderImplementation(),
);
export const createMovieUseCase = new CreateMovieUseCase(
  new MoviesRepositoryImplementation(),
);
export const createSerieUseCase = new CreateSerieUseCase(
  new SeriesRepositoryImplementation(),
);
