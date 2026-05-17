import { Test, TestingModule } from '@nestjs/testing';
import { ConsumptionProfileService } from './consumption-profile.service';

describe('ConsumptionProfileService', () => {
  let service: ConsumptionProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsumptionProfileService],
    }).compile();

    service = module.get<ConsumptionProfileService>(ConsumptionProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
