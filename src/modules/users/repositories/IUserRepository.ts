import { User } from "../infra/sequelize/entities";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

export interface IUserRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(data: ICreateUserDTO): Promise<void>;
  save(user: User): Promise<void>;
  comparePasswords(user: User, password: string): Promise<boolean>;
}
