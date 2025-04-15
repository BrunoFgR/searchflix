import { userRoutes } from "@modules/users/infra/http/routes/user.routes";
import { Router } from "express";

const router = Router();

router.use("/users", userRoutes);

export { router };
