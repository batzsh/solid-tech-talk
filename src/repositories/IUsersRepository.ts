import { User } from "../models/User";

export interface ICreateUserDTO {
  name: string;
  email: string;
}

export interface IUsersRepository {
  findByEmail(email: string): User;
  list(): User[];
  create({ name, email }: ICreateUserDTO): void;
}
