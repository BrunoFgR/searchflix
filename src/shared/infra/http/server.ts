import "reflect-metadata";
import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import swaggerSpec from "@config/swagger";
import swaggerUi from "swagger-ui-express";
import { router } from "./routes";
import { AppErrors } from "@shared/errors";
import cors from "cors";

import "@shared/infra/db/sequelize";

import "@shared/container";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    explorer: true,
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "Minha API - Documentação",
  }),
);

app.get("/swagger.json", (_, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

app.use(
  (
    err: Error,
    _request: Request,
    response: Response,
    _next: NextFunction,
  ): any => {
    if (err instanceof AppErrors) {
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
