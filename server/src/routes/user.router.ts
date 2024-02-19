import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import User from "../models/user";

export const usersRouter = express.Router();

usersRouter.use(express.json());

// GET

usersRouter.get("/all", async (_req: Request, res: Response) => {
  try {
    const users = (await collections.users
      ?.find({})
      .toArray()) as unknown as User[];

    res.status(200).send(users);
  } catch (error) {
    res.status(500).send((error as { message: string }).message);
  }
});

usersRouter.get("/:id", async (req: Request, res: Response) => {
  const id = req?.params?.id;

  try {
    const user = await collections.users
      ?.find({ _id: new ObjectId(id) })
      .toArray();

    if (user) res.status(200).send(user);
  } catch (error) {
    res.status(404).send(`Cannot find user with: ${id}`);
  }
});

// POST

// PUT

// DELETE
