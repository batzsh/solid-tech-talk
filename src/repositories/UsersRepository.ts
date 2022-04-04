import { User } from "../models/User";

interface ICreateUserDTO {
  name: string;
  email: string;
}

export class UsersRepository {
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
