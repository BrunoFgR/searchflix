import { Sequelize, Options } from "sequelize";

const dbConfig: Options = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT!),
  database: process.env.DB_NAME!,
  username: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  dialect: "postgres",
  logging: process.env.NODE_ENV === "development" ? console.log : false,
};

const sequelize = new Sequelize(dbConfig);

export { sequelize };
