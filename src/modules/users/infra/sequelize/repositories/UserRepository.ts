import { IUserRepository } from "@modules/users/repositories/IUserRepository";
import { User } from "../entities";

class UserRepository implements IUserRepository {
  private userRepository: typeof User;

  constructor() {
    this.userRepository = User;
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.userRepository.findByPk(id);
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }

  async save(user: User): Promise<void> {
    await user.save();
  }

  async create(
    data: Pick<User, "email" | "password" | "password_hash" | "name">,
  ): Promise<void> {
    await this.userRepository.create(data);
  }
}

export { UserRepository };
