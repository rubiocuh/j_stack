import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { MediaModule } from './media/media.module';
import { User } from './users/entities/user.entity';
import { Media } from './media/entities/media.entity';
import { ArtistsModule } from './artists/artists.module';
import { Artist } from './artists/entities/artist.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../.env',
    }),
    MongooseModule.forRoot('mongodb://mongo/nest'),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      uri: 'postgres://user:pass@postgres:5432/par',
      // host: 'postgres',
      // database: 'par',
      models: [User, Media, Artist],
      // password: 'user',
      // port: 5243,
      // username: 'pass',
      autoLoadModels: true,
      synchronize: true,
    }),
    // MediaModule,
    // ArtistsModule,
    UserModule,
    MediaModule,
    ArtistsModule,
  ],
  controllers: [
    // ArtistsController,
    // UserController,
    // MediaController,
  ],
  providers: [
    // AppService
  ],
})
export class AppModule {}
