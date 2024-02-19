import Express from "express";
import { connectToDatabase } from "./services/database.service";
import * as dotenv from "dotenv";
import { usersRouter } from "./routes/user.router";

dotenv.config();

const port = process.env.PORT || 8080;

const app = Express();

connectToDatabase()
  .then(() => {
    app.use("/users", usersRouter);

    app.get("/health", (_req: Express.Request, res: Express.Response) => {
      res.status(200).send();
    });

    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });
