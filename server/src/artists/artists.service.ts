import {Inject, Injectable} from '@nestjs/common';
import { Artist } from './entities/artist.entity';
import { UpdateArtistsDto } from './dto/update-artists.dto';
import { CreateArtistsDto } from './dto/create-artists.dto';
import { InjectModel } from '@nestjs/sequelize';
@Injectable()
export class ArtistsService {
  constructor(
    @InjectModel(Artist)
    private artistModel: typeof Artist,
  ) {}
  async create(createArtistsDto: CreateArtistsDto): Promise<Artist> {
    return this.artistModel.create(createArtistsDto);
  }
  async findAll(): Promise<Artist[]> {
    return this.artistModel.findAll();
  }

  async findOne(id: number) {
    return this.artistModel.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateArtistsDto: UpdateArtistsDto) {
    const artist = await this.findOne(id);
    return artist.update(updateArtistsDto);
  }

  async remove(id: number) {
    const artist = await this.findOne(id);
    return artist.destroy();
  }
}
