import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { Usuario } from "./Usuario";

@Entity('sexo')
class Sexo {
    @PrimaryGeneratedColumn()
    readonly sexoId: number

    @Column({ length: 15 })
    descricao: string

    //@ManyToOne(() => Usuario, usuario => usuario.sexo)
    //usuario: Usuario;
}

export { Sexo }