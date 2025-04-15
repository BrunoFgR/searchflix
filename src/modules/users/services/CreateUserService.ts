import { inject, injectable } from "tsyringe";

import { IUserRepository } from "../repositories/IUserRepository";
import { AppError } from "@shared/errors/AppErrors";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

@injectable()
class CreateUserService {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUserRepository,
  ) {}

  public async execute(data: ICreateUserDTO): Promise<void> {
    const userExists = await this.usersRepository.findByEmail(data.email);

    if (userExists) {
      throw new AppError("Email address already in use");
    }

    await this.usersRepository.create(data);
  }
}

export { CreateUserService };
