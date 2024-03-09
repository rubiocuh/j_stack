import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ArtistsService } from './artists.service';
import { ArtistsController } from './artists.controller';
import { Artist } from './entities/artist.entity';

@Module({
  imports: [SequelizeModule.forFeature([Artist])],
  providers: [ArtistsService],
  controllers: [ArtistsController],
})
export class ArtistsModule {}
