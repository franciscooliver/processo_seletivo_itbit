import { Entity, EntityRepository, Repository } from "typeorm"
import { Sexo } from "../models/Sexo"

@EntityRepository(Sexo)
class SexoRepository extends Repository<Sexo>{

}

export { SexoRepository }
