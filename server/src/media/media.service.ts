import { Injectable } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { Media } from './interfaces/media.interface';

@Injectable()
export class MediaService {
  private readonly media: Media[] = [];
  create(media: Media) {
    this.media.push(media);
  }

  async findAll(): Promise<Media[]> {
    return this.media;
  }

  findOne(id: number) {
    return this.media[id];
  }

  update(id: number, updateMediaDto: UpdateMediaDto) {
    return `This action updates a #${id} media`;
  }

  remove(id: number) {
    return `This action removes a #${id} media`;
  }
}
