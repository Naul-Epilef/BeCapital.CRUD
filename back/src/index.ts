import * as express from "express";
import * as cors from "cors";

import db from "./configs/database";
import routes from "./routes";

const validateConnection = async () => {
  await db()
    .then((t) => {
      const app = express();

      const port = 3333;
      const baseUrl = `http://localhost:${port}`;

      app.use(cors());
      app.use(express.json());
      app.use(routes);

      app.listen(port, () => {
        console.log(`Server has started at ${baseUrl}`);
      });
    })
    .catch((err) => {
      console.error(err);
    });
};

validateConnection();
