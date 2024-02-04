import { statusCodeMapper } from "@infra/http/statusCode/statusCodeMapper";
import { ErrorUseCase } from "@shared/core/errors/ErrorUseCase";
import { Request, Response } from "express";

export class ErrorPresenter {
  static toHTTP(req: Request, res: Response, err: ErrorUseCase | null) {
    return res.status(err?.statusCode ?? statusCodeMapper.BadRequest).json({
      message: err?.message ?? "Bad request",
      statusCode: err?.statusCode ?? statusCodeMapper.BadRequest,
    });
  }
}
