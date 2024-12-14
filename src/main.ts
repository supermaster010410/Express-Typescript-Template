import "module-alias/register";

import app from "./app";
import { ENV } from "@utils/constants";
import Logger from "@utils/logger";

const startServer = async () => {
  app.listen(ENV.PORT, ENV.HOST, () => {
    Logger.info(`Server is running at http://${ENV.HOST}:${ENV.PORT}`);
  });
};

startServer();
