import { User } from "../models/User";
import { ICreateUserDTO, IUsersRepository } from "./IUsersRepository";

export class PostgresUsersRepository implements IUsersRepository {
  findByEmail(email: string): User {
    throw new Error("Method not implemented.");
  }
  list(): User[] {
    throw new Error("Method not implemented.");
  }
  create({ name, email }: ICreateUserDTO): void {
    throw new Error("Method not implemented.");
  }
}
