import { Sequelize } from 'sequelize-typescript';
import { User } from '../users/entities/user.entity';
import { Media } from '../media/entities/media.entity';
import { ConfigModule } from '@nestjs/config';

export const databaseProviders = [
  {
    imports: [
      ConfigModule.forRoot({
        envFilePath: '../.env',
      }),
    ],
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        database: process.env.DB_PG_SCHEMA,
        dialect: 'postgres',
        host: process.env.DB_PG_HOST,
        password: process.env.DB_PG_PASS,
        port: parseInt(process.env.DB_PG_PORT, 10) || 5243,
        username: process.env.DB_PG_USER,
      });
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
