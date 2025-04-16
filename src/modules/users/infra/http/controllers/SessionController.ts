import { AuthenticateUserService } from "@modules/users/services/AuthenticateUserService";
import { Request, Response } from "express";
import { container } from "tsyringe";

class SessionController {
  public async create(request: Request, response: Response): Promise<any> {
    const { email, password } = request.body;

    const authenticateUserService = container.resolve(AuthenticateUserService);

    const { user, token } = await authenticateUserService.execute({
      email,
      password,
    });

    return response.status(200).json({ user, token });
  }
}

export { SessionController };
