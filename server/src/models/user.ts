import { ObjectId } from "mongodb";

export default class User {
  constructor(
    public name: string,
    public age: number,
    public salary: string,
    public surname?: string,
    public id?: ObjectId
  ) {}
}
