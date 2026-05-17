import { Test, TestingModule } from '@nestjs/testing';
import { FoodCalculateService } from './food-calculate.service';

describe('FoodCalculateService', () => {
  let service: FoodCalculateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodCalculateService],
    }).compile();

    service = module.get<FoodCalculateService>(FoodCalculateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
