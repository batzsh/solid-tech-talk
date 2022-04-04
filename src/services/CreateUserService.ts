import { IUsersRepository } from "../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

/*
 * [x] - Definir o tipo de retorno
 * [x] - Alterar o retorno do erro
 * [x] - Acessar o repositório
 * [x] - Retornar algo
 */

export class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name, email }: IRequest): void {
    const userAlreadyExists = this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    this.usersRepository.create({ name, email });
  }
}
