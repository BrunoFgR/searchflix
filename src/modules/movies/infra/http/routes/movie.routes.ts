import { Router } from "express";
import { MovieController } from "../controllers";
import { ensureAuthenticated } from "@modules/users/infra/http/middlewares";

const movieController = new MovieController();
const movieRoutes = Router();

movieRoutes.use(ensureAuthenticated);
movieRoutes.post("/", movieController.create);

export { movieRoutes };
