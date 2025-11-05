import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'back_end_JR', // nombre del proveedor de conexión
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1234',
        database: 'back_end_JR', // nombre real de tu BD
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
