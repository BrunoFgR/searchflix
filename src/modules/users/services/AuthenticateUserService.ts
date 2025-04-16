import { authConfig } from "@config/auth";
import { AppErrors } from "@shared/errors/AppErrors";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../repositories/IUserRepository";
import { IHashProvider } from "../providers/HashProvider/repositories/IHashProvider";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    id: string;
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,

    @inject("HashProvider")
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppErrors("Incorrect email or password", 401);
    }

    const passwordMatched = await this.hashProvider.compareHash(
      password,
      user.password_hash,
    );

    if (!passwordMatched) {
      throw new AppErrors("Incorrect email or password", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      token,
    };
  }
}

export { AuthenticateUserService };
