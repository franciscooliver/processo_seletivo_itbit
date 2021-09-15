import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSexo1631659775409 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner
      .createTable(
        new Table({
          name: "sexo",
          columns: [
            {
              name: "sexoId",
              type: "integer",
              isPrimary: true,
              isGenerated: true,
              generationStrategy: "increment",
            },
            {
              name: "descricao",
              type: "varchar",
              length: "15",
            },
          ],
        })
      )
      .then(() => {
        queryRunner.query(
          "INSERT INTO sexo(descricao) values('Masculino'),('Feminino');"
        );
      });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("sexo");
  }
}
