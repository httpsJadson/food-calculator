import { Test, TestingModule } from '@nestjs/testing';
import { ConsumptionProfileController } from './consumption-profile.controller';
import { ConsumptionProfileService } from './consumption-profile.service';

describe('ConsumptionProfileController', () => {
  let controller: ConsumptionProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsumptionProfileController],
      providers: [ConsumptionProfileService],
    }).compile();

    controller = module.get<ConsumptionProfileController>(ConsumptionProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
