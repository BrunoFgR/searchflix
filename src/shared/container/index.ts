import { container } from "tsyringe";

import { IUserRepository } from "@modules/users/repositories";
import { UserRepository } from "@modules/users/infra/sequelize/repositories";

import { IMovieRepository } from "@modules/movies/repositories";
import { MovieRepository } from "@modules/movies/infra/sequelize/repositories";

import "@modules/users/providers";
import "@modules/movies/providers";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<IMovieRepository>(
  "MovieRepository",
  MovieRepository,
);
