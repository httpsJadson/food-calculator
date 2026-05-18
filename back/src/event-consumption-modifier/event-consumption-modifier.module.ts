import { Module } from '@nestjs/common';
import { EventConsumptionModifierService } from './event-consumption-modifier.service';
import { EventConsumptionModifierController } from './event-consumption-modifier.controller';

@Module({
  controllers: [EventConsumptionModifierController],
  providers: [EventConsumptionModifierService],
})
export class EventConsumptionModifierModule {}
