import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1631659788899 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'usuarios',
                columns: [
                    {
                        name: 'usuarioId',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
                        length: '200'
                    },
                    {
                        name: 'dataNascimento',
                        type: 'timestamp',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        length: '100'
                    },
                    {
                        name: 'senha',
                        type: 'varchar',
                        length: '200'
                    },
                    {
                        name: 'ativo',
                        type: 'boolean'
                    },
                    {
                        name: 'sexoId',
                        type: 'integer'
                    },
                ],
                foreignKeys: [
                    {
                        name: "sexoId",
                        referencedTableName: "sexo",
                        referencedColumnNames: ["sexoId"],
                        columnNames: ["sexoId"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuarios");
    }

}
