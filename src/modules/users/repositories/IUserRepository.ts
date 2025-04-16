import { User } from "../infra/sequelize/entities";

export interface IUserRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(
    data: Pick<User, "email" | "password" | "name" | "password_hash">,
  ): Promise<void>;
  save(user: User): Promise<void>;
}
