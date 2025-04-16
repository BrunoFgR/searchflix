import { CreateUserService } from "@modules/users/services/CreateUserService";
import { Request, Response } from "express";
import { container } from "tsyringe";

class UserController {
  public async create(request: Request, response: Response): Promise<any> {
    const { name, email, password } = request.body;

    const createUserUseCase = container.resolve(CreateUserService);
    const user = await createUserUseCase.execute({ name, email, password });

    return response.status(201).json(user);
  }
}

export { UserController };
