import { Injectable } from '@nestjs/common';
import { CreateEventConsumptionModifierDto } from './dto/create-event-consumption-modifier.dto';
import { UpdateEventConsumptionModifierDto } from './dto/update-event-consumption-modifier.dto';

@Injectable()
export class EventConsumptionModifierService {
  create(createEventConsumptionModifierDto: CreateEventConsumptionModifierDto) {
    return 'This action adds a new eventConsumptionModifier';
  }

  findAll() {
    return `This action returns all eventConsumptionModifier`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventConsumptionModifier`;
  }

  update(id: number, updateEventConsumptionModifierDto: UpdateEventConsumptionModifierDto) {
    return `This action updates a #${id} eventConsumptionModifier`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventConsumptionModifier`;
  }
}
