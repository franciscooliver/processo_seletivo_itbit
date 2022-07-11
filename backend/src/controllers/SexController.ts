import { Request, Response } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import { SexRepository } from "../repositories/SexRepository";

class SexController {
  async all(req: Request, res: Response) {
    const sexos = await getCustomRepository(SexRepository).find()

    return res.status(200).json(sexos);
  }

  async update(req: Request, res: Response) { }

  async delete(req: Request, res: Response) { }

  async search(req: Request, res: Response) { }
}

export { SexController };
