import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateArtistsDto } from './dto/create-artists.dto';
import { UpdateArtistsDto } from './dto/update-artists.dto';
import { Artist } from './entities/artist.entity';
import { ArtistsService } from './artists.service';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}
  @Post()
  create(@Body() createArtistsDto: CreateArtistsDto): Promise<Artist> {
    return this.artistsService.create(createArtistsDto);
  }
  @Get()
  findAll(): Promise<Artist[]> {
    return this.artistsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Artist> {
    return this.artistsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateArtistsDto: UpdateArtistsDto,
  ): Promise<Artist> {
    return this.artistsService.update(+id, updateArtistsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.artistsService.remove(+id);
  }
}
