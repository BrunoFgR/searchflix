import { container } from "tsyringe";

import { IHashProvider } from "./HashProvider/repositories/IHashProvider";
import { BCryptHashProvider } from "./HashProvider/implementations/BCryptHashProvider";

container.registerSingleton<IHashProvider>("HashProvider", BCryptHashProvider);
