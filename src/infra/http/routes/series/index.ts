import { CreateSerieController } from "@infra/http/controllers/series/createSerieController";
import { Router } from "express";

const createSerieController = new CreateSerieController();

const seriesRoutes = Router();

seriesRoutes.post("/series", createSerieController.handle);

export { seriesRoutes };
