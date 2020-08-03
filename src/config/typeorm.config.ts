import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 2345, //5432,
  username: 'postgres',
  password: 'postgres',
  database: 'survey',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
