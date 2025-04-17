import { inject, injectable } from "tsyringe";
import { IOmdbEntity } from "../providers/ApiProvider/OMDBProvider/entities";
import { OmdbProvider } from "../providers/ApiProvider/OMDBProvider/implementantions";

@injectable()
class GetMovieDetailService {
  constructor(
    @inject("OmdbProvider")
    private omdbProvider: OmdbProvider,
  ) {}

  async execute(title: string): Promise<IOmdbEntity> {
    return await this.omdbProvider.getMovieDetails(title);
  }
}

export { GetMovieDetailService };
