import Express from "express";
import { connectToDatabase } from "./services/database.service";
import * as dotenv from "dotenv";
import { usersRouter } from "./routes/user.router";
import cors from "cors";

dotenv.config();

const port = process.env.PORT || 8080;

const app = Express();

app.use(cors());

app.use(Express.json());

connectToDatabase()
  .then(() => {
    app.use("/users", usersRouter);

    app.get("/health", (_req: Express.Request, res: Express.Response) => {
      res.status(200).send();
    });

    app.post("/test", (req: Express.Request, res: Express.Response) => {
      console.log(req.body);
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
