import { Router } from "express";
import { UserController } from "../controllers";

const userController = new UserController();

const userRoutes = Router();

userRoutes.post("/", userController.create);

export { userRoutes };
