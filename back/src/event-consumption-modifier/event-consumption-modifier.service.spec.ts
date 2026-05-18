import { Test, TestingModule } from '@nestjs/testing';
import { EventConsumptionModifierService } from './event-consumption-modifier.service';

describe('EventConsumptionModifierService', () => {
  let service: EventConsumptionModifierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventConsumptionModifierService],
    }).compile();

    service = module.get<EventConsumptionModifierService>(EventConsumptionModifierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
