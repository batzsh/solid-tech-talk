import { User } from "../models/User";
import { ICreateUserDTO, IUsersRepository } from "./IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  create({ name, email }: ICreateUserDTO): void {
    const user = new User(name, email);

    this.users.push(user);
  }

  list(): User[] {
    return this.users;
  }

  findByEmail(email: string): User {
    const user = this.users.find((user) => user.email === email);

    return user!;
  }
}
