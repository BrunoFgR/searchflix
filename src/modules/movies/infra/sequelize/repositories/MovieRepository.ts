import { ICreateMovieDTO } from "@modules/movies/dtos";
import { IMovieRepository } from "@modules/movies/repositories";
import { Movie } from "../entities";
import { AppErrors } from "@shared/errors";

class MovieRepository implements IMovieRepository {
  private movieRepository: typeof Movie;

  constructor() {
    this.movieRepository = Movie;
  }

  async create(data: ICreateMovieDTO): Promise<void> {
    await this.movieRepository.create(data);
  }

  async findById(id: string): Promise<Movie | null> {
    return await this.movieRepository.findByPk(id);
  }

  async listByUserId(user_id: string): Promise<Movie[]> {
    return await this.movieRepository.findAll({ where: { user_id } });
  }

  async update(movie: Movie): Promise<Movie> {
    await movie.save();
    return movie;
  }

  async delete(id: string): Promise<void> {
    const movie = await this.movieRepository.findByPk(id);

    if (!movie) {
      throw new AppErrors("Movie not found");
    }

    await movie.destroy();
  }

  async findByTitleAndUserId(
    title: string,
    user_id: string,
  ): Promise<Movie | null> {
    return await this.movieRepository.findOne({ where: { title, user_id } });
  }
}

export { MovieRepository };
