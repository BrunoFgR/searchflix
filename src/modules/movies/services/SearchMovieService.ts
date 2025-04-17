import { inject, injectable } from "tsyringe";
import { IOmdbSearch } from "../providers/ApiProvider/OMDBProvider/entities";
import { OmdbProvider } from "../providers/ApiProvider/OMDBProvider/implementantions";

@injectable()
class SearchMovieService {
  constructor(
    @inject("OmdbProvider")
    private omdbProvider: OmdbProvider,
  ) {}

  async execute(title: string, page?: string): Promise<IOmdbSearch[]> {
    return await this.omdbProvider.searchMovies(title, page);
  }
}

export { SearchMovieService };
