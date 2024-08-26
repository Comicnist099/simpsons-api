import { Test, TestingModule } from '@nestjs/testing';
import { SimpsonsController } from './simpsons.controller';

describe('SimpsonsController', () => {
  let controller: SimpsonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SimpsonsController],
    }).compile();

    controller = module.get<SimpsonsController>(SimpsonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
