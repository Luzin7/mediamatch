import { statusCodeMapper } from "@infra/http/statusCode/statusCodeMapper";
import { ErrorUseCase } from "@shared/core/errors/ErrorUseCase";

export class UserAlreadyExistsError extends Error implements ErrorUseCase {
  statusCode: number = statusCodeMapper.Conflict;

  constructor() {
    super("User already exists");
  }
}
