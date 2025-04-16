import { inject, injectable } from "tsyringe";

import { IUserRepository } from "../repositories";
import { AppErrors } from "@shared/errors";
import { ICreateUserDTO } from "../dtos";
import { IHashProvider } from "../providers/HashProvider/repositories";

@injectable()
class CreateUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,

    @inject("HashProvider")
    private hashProvider: IHashProvider,
  ) {}

  public async execute(data: ICreateUserDTO): Promise<void> {
    const userExists = await this.userRepository.findByEmail(data.email);

    if (userExists) {
      throw new AppErrors(
        "A user with the provided email already exists in the system",
        409,
      );
    }

    const passwordHash = await this.hashProvider.generateHash(data.password);

    await this.userRepository.create({
      ...data,
      password_hash: passwordHash,
    });
  }
}

export { CreateUserService };
