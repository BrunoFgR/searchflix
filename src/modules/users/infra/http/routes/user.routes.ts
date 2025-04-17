import { Router } from "express";
import { UserController } from "../controllers";

const userController = new UserController();

const userRoutes = Router();

/**
 *@swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       201:
 *         description: User created successfully
 *       409:
 *         description: A user with the provided email already exists in the system
 *       500:
 *         description: Internal server error
 */
userRoutes.post("/", userController.create);

export { userRoutes };
