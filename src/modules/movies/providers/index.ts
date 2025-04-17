import { container } from "tsyringe";
import { OmdbProvider } from "./ApiProvider/OMDBProvider/implementantions";
import { IOmdbProvider } from "./ApiProvider/OMDBProvider/repositories";

container.registerSingleton<IOmdbProvider>("OmdbProvider", OmdbProvider);
