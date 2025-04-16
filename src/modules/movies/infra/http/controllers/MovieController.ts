import { Request, Response } from "express";
import {
  CreateMovieService,
  ListMovieByUserIdService,
} from "@modules/movies/services";
import { container } from "tsyringe";
import { UpdateMovieByIdService } from "@modules/movies/services/UpdateMovieByIdService";
import { DeleteMovieByIdService } from "@modules/movies/services/DeleteMovieByIdService";

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

  async list(req: Request, res: Response): Promise<any> {
    const { id: user_id } = req.user;

    const listMovieByUserIdService = container.resolve(
      ListMovieByUserIdService,
    );

    const movies = await listMovieByUserIdService.execute({ user_id });

    return res.status(200).json(movies);
  }

  async update(req: Request, res: Response): Promise<any> {
    const { id: user_id } = req.user;
    const { id } = req.params;
    const { title, description, released_year } = req.body;

    const updateMovieByIdService = container.resolve(UpdateMovieByIdService);

    const movie = await updateMovieByIdService.execute(id, user_id, {
      title,
      description,
      released_year,
    });

    return res.status(200).json(movie);
  }

  async delete(req: Request, res: Response): Promise<any> {
    const { id: user_id } = req.user;
    const { id } = req.params;

    const deleteMovieByIdService = container.resolve(DeleteMovieByIdService);

    await deleteMovieByIdService.execute(id, user_id);

    return res.status(200).json({ message: "Movie deleted successfully" });
  }
}

export { MovieController };
