import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MediaService } from './media.service';
import { Media } from './entities/media.entity';
import { MediaController } from './media.controller';

@Module({
  imports: [SequelizeModule.forFeature([Media])],
  controllers: [MediaController],
  providers: [MediaService],
})
export class MediaModule {}
