import { Router } from "express";
import { moviesRoutes } from "./movies";
import { seriesRoutes } from "./series";
import { usersRoutes } from "./users";

const routes = Router();

routes.use(usersRoutes);
routes.use(moviesRoutes);
routes.use(seriesRoutes);

export { routes };
