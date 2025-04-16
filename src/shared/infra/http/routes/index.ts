import { movieRoutes } from "@modules/movies/infra/http/routes";
import { sessionRoutes, userRoutes } from "@modules/users/infra/http/routes";
import { Router } from "express";

const router = Router();

router.use("/users", userRoutes);
router.use("/session", sessionRoutes);
router.use("/movies", movieRoutes);

export { router };
