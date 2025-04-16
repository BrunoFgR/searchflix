import { ICreateMovieDTO } from "../dtos";
import { Movie } from "../infra/sequelize/entities";

export interface IMovieRepository {
  create(data: ICreateMovieDTO): Promise<void>;
  findById(id: string): Promise<Movie | null>;
  findByTitleAndUserId(title: string, user_id: string): Promise<Movie | null>;
  listByUserId(user_id: string): Promise<Movie[]>;
  update(movie: Movie): Promise<Movie>;
  delete(id: string): Promise<void>;
}
