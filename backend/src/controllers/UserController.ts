import { Request, Response } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";

class UserController {
  async create(req: Request, res: Response) {
    const { nome, dataNascimento, email, senha, ativo, sexoId } = req.body;

    const userRepository = getCustomRepository(UserRepository);

    const userAlreadyExists = await userRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      return res.status(400).json({
        error: "User already exists!",
      });
    }

    const user = userRepository.create({
      nome,
      dataNascimento,
      email,
      senha,
      ativo,
      sexoId,
    });

    await userRepository.save(user);

    return res.status(201).json(user);
  }

  async all(req: Request, res: Response) {
    const usuarios = await getCustomRepository(UserRepository)
      .createQueryBuilder("usuarios")
      .leftJoinAndSelect("usuarios.sexo", "sexo")
      .getMany();

    return res.status(200).json(usuarios);
  }

  async update(req: Request, res: Response) {}

  async delete(req: Request, res: Response) {}

  async search(req: Request, res: Response) {}
}

export { UserController };
