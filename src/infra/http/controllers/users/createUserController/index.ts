import { statusCodeMapper } from "@infra/http/statusCode/statusCodeMapper";
import { createUserUseCase } from "@infra/implementations";
import { createUserBodySchema } from "@infra/schemas/createUserBodySchema";
import { Controller } from "@shared/core/infra/controller";
import { ErrorPresenter } from "@shared/presenters/ErrorPresenter";
import { Request, Response } from "express";

export class CreateUserController implements Controller {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, name, password } = createUserBodySchema.parse(req.body);

    const response = await createUserUseCase.execute({
      email,
      name,
      password,
    });

    if (response.isLeft()) {
      const error = response.value;
      return ErrorPresenter.toHTTP(req, res, error);
    }

    return res.status(statusCodeMapper.Created).end();
  }
}
