import { AppErrors } from "@shared/errors";
import { inject, injectable } from "tsyringe";
import { IUpdateMovieDTO } from "../dtos";
import { MovieRepository } from "../infra/sequelize/repositories";

interface IResponse {
  id: string;
  title: string;
  description: string;
  released_year: number;
  created_at: Date;
  updated_at: Date;
}

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
  ): Promise<IResponse> {
    const movie = await this.movieRepository.findById(movie_id);

    if (!movie) {
      throw new AppErrors("Movie not found", 404);
    }

    if (movie.user_id !== user_id) {
      throw new AppErrors("Unauthorized", 401);
    }

    Object.assign(movie, data);

    await this.movieRepository.update(movie);

    return {
      id: movie.id,
      title: movie.title,
      description: movie.description,
      released_year: movie.released_year,
      created_at: movie.created_at,
      updated_at: movie.updated_at,
    };
  }
}

export { UpdateMovieByIdService };
