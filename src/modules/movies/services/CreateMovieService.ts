import { inject, injectable } from "tsyringe";

import { IMovieRepository } from "../repositories/IMovieRepository";
import { AppErrors } from "@shared/errors";

interface IRequest {
  title: string;
  user_id: string;
  description: string;
  released_year: number;
}

@injectable()
class CreateMovieService {
  constructor(
    @inject("MovieRepository")
    private movieRepository: IMovieRepository,
  ) {}

  async execute({ user_id, ...request }: IRequest): Promise<void> {
    const movieExists = await this.movieRepository.findByTitleAndUserId(
      request.title,
      user_id,
    );

    if (movieExists) {
      throw new AppErrors("Movie already exists", 409);
    }

    await this.movieRepository.create({
      ...request,
      user_id,
    });
  }
}

export { CreateMovieService };
