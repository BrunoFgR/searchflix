import { AppErrors } from "@shared/errors";
import { inject, injectable } from "tsyringe";
import { IUpdateMovieDTO } from "../dtos";
import { Movie } from "../infra/sequelize/entities";
import { MovieRepository } from "../infra/sequelize/repositories";

@injectable()
class UpdateMovieByIdService {
  constructor(
    @inject("MovieRepository")
    private movieRepository: MovieRepository,
  ) {}

  async execute(
    movie_id: string,
    user_id: string,
    data: IUpdateMovieDTO,
  ): Promise<Movie> {
    const movie = await this.movieRepository.findById(movie_id);

    if (!movie) {
      throw new AppErrors("Movie not found", 404);
    }

    if (movie.user_id !== user_id) {
      throw new AppErrors("Unauthorized", 401);
    }

    Object.assign(movie, data);

    await this.movieRepository.update(movie);

    return movie;
  }
}

export { UpdateMovieByIdService };
