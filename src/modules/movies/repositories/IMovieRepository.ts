import { ICreateMovieDTO, IUpdateMovieDTO } from "../dtos";
import { Movie } from "../infra/sequelize/entities";

export interface IMovieRepository {
  create(data: ICreateMovieDTO): Promise<void>;
  findById(id: string): Promise<Movie | null>;
  findByTitleAndUserId(title: string, user_id: string): Promise<Movie | null>;
  list(): Promise<Movie[]>;
  update(id: string, data: IUpdateMovieDTO): Promise<Movie>;
  delete(id: string): Promise<void>;
}
