import "reflect-metadata";

import express, { NextFunction, Request, Response } from "express";

import "@shared/container";
import { AppError } from "@shared/errors/AppErrors";
import "@shared/infra/db/sequelize";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    console.error(err);

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  },
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
