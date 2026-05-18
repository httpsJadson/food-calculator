import { PartialType } from '@nestjs/swagger';
import { CreateEventConsumptionModifierDto } from './create-event-consumption-modifier.dto';

export class UpdateEventConsumptionModifierDto extends PartialType(CreateEventConsumptionModifierDto) {}
