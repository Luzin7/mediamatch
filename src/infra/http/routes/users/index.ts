import { CreateUserController } from "@infra/http/controllers/users/createUserController";
import { Router } from "express";

const createUserController = new CreateUserController();

const usersRoutes = Router();

usersRoutes.post("/users", createUserController.handle);

export { usersRoutes };
