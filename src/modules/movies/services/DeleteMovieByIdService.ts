import { inject, injectable } from "tsyringe";
import { MovieRepository } from "../infra/sequelize/repositories";
import { AppErrors } from "@shared/errors";

@injectable()
class DeleteMovieByIdService {
  constructor(
    @inject("MovieRepository")
    private movieRepository: MovieRepository,
  ) {}

  async execute(movieId: string, userId: string): Promise<void> {
    const movie = await this.movieRepository.findById(movieId);

    if (!movie) {
      throw new AppErrors("Movie not found", 404);
    }

    if (movie.user_id !== userId) {
      throw new AppErrors("Unauthorized", 401);
    }

    await this.movieRepository.delete(movieId);
  }
}

export { DeleteMovieByIdService };
