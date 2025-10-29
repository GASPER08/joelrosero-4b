import { config } from 'dotenv';
import { DataSource } from 'typeorm';

// Definir entorno
const env = process.env.NODE_ENV || 'development';

// Cargar variables de entorno
config({
  override: true,
  path: `.env.${env}`,
  debug: true, // para validar que se está modificando 
});

// Configuración de la fuente de datos (DataSource)
export default new DataSource({
  type: 'postgres',
  host: process.env.HOST,
  port: Number(process.env.PORT), // ⚠️ corregido
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
});
