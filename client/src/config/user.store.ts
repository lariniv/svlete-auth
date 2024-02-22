import { writable } from "svelte/store";

export type User =
  | {
      _id: string;
      email: string;
      password: string;
    }
  | Record<string, never>;

export const user = writable<User>({});
