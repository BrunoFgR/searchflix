import swaggerJsdoc from "swagger-jsdoc";
import { version } from "../../package.json";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API com Express e TypeScript",
      version,
      description: "Documentação da API",
      contact: {
        name: "Bruno Figueredo",
        email: "brunofds281@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor de desenvolvimento",
      },
      // {
      //   url: "https://api.seudominio.com",
      //   description: "Servidor de produção",
      // },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: [
    "./src/modules/**/providers/ApiProvider/**/entities/*.ts",
    "./src/modules/**/infra/http/routes/*.routes.ts",
    "./src/modules/**/infra/sequelize/entities/*.ts",
  ],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
