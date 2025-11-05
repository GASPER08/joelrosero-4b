import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { MigrationInterface, QueryRunner } from "typeorm";

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  detalle: string;
}

// Si quieres definir una migración para crear la tabla manualmente:
export class CreateCategoriaTable1660000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "categoria" (
        "id" SERIAL NOT NULL,
        "nombre" character varying NOT NULL,
        "detalle" character varying NOT NULL,
        PRIMARY KEY ("id")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "categoria"`);
  }
}
