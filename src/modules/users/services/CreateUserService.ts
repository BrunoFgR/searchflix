import { inject, injectable } from "tsyringe";

import { IUserRepository } from "../repositories/IUserRepository";
import { AppErrors } from "@shared/errors/AppErrors";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

@injectable()
class CreateUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,
  ) {}

  public async execute(data: ICreateUserDTO): Promise<void> {
    const userExists = await this.userRepository.findByEmail(data.email);

    if (userExists) {
      throw new AppErrors(
        "A user with the provided email already exists in the system",
        409,
      );
    }

    await this.userRepository.create(data);
  }
}

export { CreateUserService };
