import { CreateMovieController } from "@infra/http/controllers/movies/createMovieController";
import { Router } from "express";

const createMovieController = new CreateMovieController();

const moviesRoutes = Router();

moviesRoutes.post("/movies", createMovieController.handle);

export { moviesRoutes };
