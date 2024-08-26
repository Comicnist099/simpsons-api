import { Controller, Get, Param } from '@nestjs/common';
import { SimpsonsService } from './simpsons.service';

@Controller('simpsons')
export class SimpsonsController {
  constructor(private readonly simpsonsService: SimpsonsService) {}

  @Get()
  getAllCharacters() {
    return this.simpsonsService.getAllCharacters();
  }

  @Get(':id')
  getCharacterById(@Param('id') id: string) {
    return this.simpsonsService.getCharacterById(Number(id));
  }
}
