import { Router } from "express";

import { UsersRepository } from "../repositories/UsersRepository";

const usersRoutes = Router();
const usersRepository = new UsersRepository();

usersRoutes.post("/", (request, response) => {
  const { name, email } = request.body;

  const userAlreadyExists = usersRepository.findByEmail(email);

  if (userAlreadyExists) {
    return response.status(400).json({ error: "User already exists" });
  }

  usersRepository.create({ name, email });

  return response.status(201).send();
});

usersRoutes.get("/", (request, response) => {
  const all = usersRepository.list();

  return response.status(200).json(all);
});

export { usersRoutes };
