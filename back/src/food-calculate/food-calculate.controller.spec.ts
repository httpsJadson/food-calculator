import { Test, TestingModule } from '@nestjs/testing';
import { FoodCalculateController } from './food-calculate.controller';
import { FoodCalculateService } from './food-calculate.service';

describe('FoodCalculateController', () => {
  let controller: FoodCalculateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodCalculateController],
      providers: [FoodCalculateService],
    }).compile();

    controller = module.get<FoodCalculateController>(FoodCalculateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
