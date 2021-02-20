import * as express from "express";

import userRouter from "./users.routes";

const app = express();

app.use("/users", userRouter);

export default app;
