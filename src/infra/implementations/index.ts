import { UsersRepositoryImplementation } from "@infra/database/prisma/repositories/users/UsersRepository";
import CreateUserUseCase from "@module/users/useCase/createUser";
import { CryptographyProviderImplementation } from "@providers/cryptography/implementations/CryptographyProviderImplementation";

export const createUserUseCase = new CreateUserUseCase(
  new UsersRepositoryImplementation(),
  new CryptographyProviderImplementation(),
);