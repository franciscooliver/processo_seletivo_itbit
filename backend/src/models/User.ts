import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { Sex } from "./Sex"

@Entity('usuarios')
class User {
    @PrimaryGeneratedColumn()
    readonly usuarioId: number

    @Column({ length: 200 })
    nome: string

    @CreateDateColumn({ type: 'date' })
    dataNascimento: Date

    @Column({ length: 100 })
    email: string

    @Column({ length: 30 })
    senha: string

    @Column()
    ativo: boolean

    @Column()
    sexoId: number

    @ManyToOne(() => Sex)
    @JoinColumn({ name: 'sexoId' })
    sexo: Sex;
}

export { User }