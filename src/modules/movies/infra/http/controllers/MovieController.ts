import { Request, Response } from "express";
import { CreateMovieService } from "@modules/movies/services";
import { container } from "tsyringe";

class MovieController {
  async create(req: Request, res: Response): Promise<any> {
    const { id: user_id } = req.user;
    const { title, description, released_year } = req.body;

    const createMovieService = container.resolve(CreateMovieService);

    await createMovieService.execute({
      user_id,
      title,
      description,
      released_year,
    });

    return res.status(201).json({ message: "Movie created successfully" });
  }
}

export { MovieController };
