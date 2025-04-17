import { IOmdbEntity, IOmdbSearch } from "../entities";

export interface IOmdbProvider {
  searchMovies(query: string, page?: string): Promise<IOmdbSearch[]>;
  getMovieDetails(title: string): Promise<IOmdbEntity>;
}
