import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity('sexo')
class Sex {
    @PrimaryGeneratedColumn()
    readonly sexoId: number

    @Column({ length: 15 })
    descricao: string

    //@ManyToOne(() => Usuario, usuario => usuario.sexo)
    //usuario: Usuario;
}

export { Sex }