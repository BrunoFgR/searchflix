import { api } from "@config/api";
import { IOmdbEntity, IOmdbSearch } from "../entities";
import { IOmdbProvider } from "../repositories";
import { AppErrors } from "@shared/errors";

class OmdbProvider implements IOmdbProvider {
  async searchMovies(query: string, page?: string): Promise<IOmdbSearch[]> {
    try {
      const response = await api.get<IOmdbSearch[]>("/", {
        params: {
          s: query,
          page: page || "1",
        },
      });
      return response.data;
    } catch (error) {
      throw new AppErrors("Failed to search movies", 404);
    }
  }

  async getMovieDetails(title: string): Promise<IOmdbEntity> {
    try {
      const response = await api.get<IOmdbEntity>("/", {
        params: {
          t: title,
        },
      });
      return response.data;
    } catch (error) {
      throw new AppErrors("Failed to get movie", 404);
    }
  }
}

export { OmdbProvider };
