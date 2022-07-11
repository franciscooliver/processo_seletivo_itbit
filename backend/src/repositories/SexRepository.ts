import { EntityRepository, Repository } from "typeorm"
import { Sex } from "../models/Sex"

@EntityRepository(Sex)
class SexRepository extends Repository<Sex>{
}

export { SexRepository }
