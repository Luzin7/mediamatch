import { User } from "@module/users/entities/userEntity";
import { UserAlreadyExistsError } from "@module/users/errors/UserAlreadyExistsError";
import { UsersRepository } from "@module/users/repositories/contracts/UserRepository";
import { CryptographyProvider } from "@providers/cryptography/contracts/CryptographyProvider";
import { Either, left, right } from "@shared/core/errors/Either";
import { UseCase } from "@shared/core/modules/UseCase";

interface Request {
  name: string;
  email: string;
  password: string;
}

type Response = Either<
  UserAlreadyExistsError,
  {
    user: User;
  }
>;

export class CreateUserUseCase implements UseCase<Request, Response> {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly cryptographyProvider: CryptographyProvider,
  ) {}

  async execute({ email, name, password }: Request): Promise<Response> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      return left(new UserAlreadyExistsError());
    }

    const { hash, salt } =
      await this.cryptographyProvider.hashCreator(password);

    const newUser = User.create({
      email,
      name,
      password: hash,
      salt,
    });

    await this.usersRepository.create(newUser);

    return right({
      user: newUser,
    });
  }
}
