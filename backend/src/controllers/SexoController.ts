import { Request, Response } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import { SexoRepository } from "../repositories/SexoRepository";

class SexoController {
  async all(req: Request, res: Response) {
    const sexos = await getCustomRepository(SexoRepository).find()

    return res.status(200).json(sexos);
  }

  async update(req: Request, res: Response) { }

  async delete(req: Request, res: Response) { }

  async search(req: Request, res: Response) { }
}

export { SexoController };
