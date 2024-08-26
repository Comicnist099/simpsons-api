import { Module } from '@nestjs/common';
import { SimpsonsService } from './simpsons.service';
import { SimpsonsController } from './simpsons.controller';

@Module({
  imports: [],
  controllers: [SimpsonsController],
  providers: [SimpsonsService],
})
export class SimpsonsModule {}
