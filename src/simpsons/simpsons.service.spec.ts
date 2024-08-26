import { Test, TestingModule } from '@nestjs/testing';
import { SimpsonsService } from './simpsons.service';

describe('SimpsonsService', () => {
  let service: SimpsonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SimpsonsService],
    }).compile();

    service = module.get<SimpsonsService>(SimpsonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
