import express, { Request, Response } from "express";

import "@shared/infra/db/sequelize";
import { User } from "@modules/users/infra/sequelize/entities";

const app = express();

app.use(express.json());

app.use("/api", async (_: Request, res: Response) => {
  await User.create({
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
  });
  res.status(200).json({ message: "Hello, World!" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
