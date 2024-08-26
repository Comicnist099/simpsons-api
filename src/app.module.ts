import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SimpsonsService } from './simpsons/simpsons.service';
import { SimpsonsController } from './simpsons/simpsons.controller';
import { SimpsonsModule } from './simpsons/simpsons.module';

@Module({
  imports: [SimpsonsModule],
  controllers: [AppController, SimpsonsController],
  providers: [AppService, SimpsonsService],
})
export class AppModule {}
