import { sequelize } from "./config";
import { User, Movie } from "./models";

const models = [User, Movie];

const initDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");

    models.forEach((model) => model.initialize(sequelize));

    models.forEach((model) => {
      if (typeof model.associate === "function") {
        model.associate(sequelize.models);
      }
    });

    await sequelize.sync({ force: false, alter: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    throw error;
  }
};

initDatabase();
