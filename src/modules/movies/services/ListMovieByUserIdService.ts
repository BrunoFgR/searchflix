import { inject, injectable } from "tsyringe";
import { IMovieRepository } from "../repositories";
import { Movie } from "../infra/sequelize/entities";

interface IRequest {
  user_id: string;
}

@injectable()
class ListMovieByUserIdService {
  constructor(
    @inject("MovieRepository")
    private movieRepository: IMovieRepository,
  ) {}

  async execute({ user_id }: IRequest): Promise<Movie[]> {
    return this.movieRepository.listByUserId(user_id);
  }
}

export { ListMovieByUserIdService };
