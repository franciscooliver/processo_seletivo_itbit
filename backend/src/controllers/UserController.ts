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

  async update(req: Request, res: Response) {
    const { id } = req.params
    const { nome, dataNascimento, email, senha, sexoId, ativo } = req.body

    const userRepository = getCustomRepository(UserRepository);

    const usuario = await userRepository.findOne({
      where: { usuarioId: id }
    });

    const r = usuario && await userRepository.save(Object.assign(usuario, { nome, dataNascimento, email, senha, sexoId, ativo }))

    return res.status(200).json(r);

  }

  async enableDisableUser(req: Request, res: Response) {
    const { id } = req.params
    const { ativo } = req.body;

    const userRepository = getCustomRepository(UserRepository);

    const usuario = await userRepository.findOne({
      where: { usuarioId: id }
    });

    const r = usuario && await userRepository.save(Object.assign(usuario, { ativo }))

    return res.status(200).json(r);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params

    const userRepository = getCustomRepository(UserRepository);

    await userRepository.delete({ usuarioId: Number(id) })

    return res.status(200).json({ "mensagem": "Usuário deletado com sucesso" })
  }

  async search(req: Request, res: Response) {
    const { nome, ativo } = req.query;

    const usuarios = await getCustomRepository(UserRepository)
      .createQueryBuilder("usuarios")
      .leftJoinAndSelect("usuarios.sexo", "sexo")
      .where("usuarios.nome like :nome", { nome: `%${nome}%` })
      .andWhere({ ativo: ativo })
      .getMany();

    return res.status(200).json(usuarios);
  }
}

export { UserController };
