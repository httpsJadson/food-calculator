import { Test, TestingModule } from '@nestjs/testing';
import { EventConsumptionModifierController } from './event-consumption-modifier.controller';
import { EventConsumptionModifierService } from './event-consumption-modifier.service';

describe('EventConsumptionModifierController', () => {
  let controller: EventConsumptionModifierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventConsumptionModifierController],
      providers: [EventConsumptionModifierService],
    }).compile();

    controller = module.get<EventConsumptionModifierController>(EventConsumptionModifierController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
