import { Sequelize, Options } from "sequelize";

const dbConfig: Options = {
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432"),
  database: process.env.DB_NAME || "searchflix",
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  dialect: "postgres",
  logging: process.env.NODE_ENV === "development" ? console.log : false,
};

const sequelize = new Sequelize(dbConfig);

export { sequelize };
