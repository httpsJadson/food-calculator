import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventConsumptionModifierService } from './event-consumption-modifier.service';
import { CreateEventConsumptionModifierDto } from './dto/create-event-consumption-modifier.dto';
import { UpdateEventConsumptionModifierDto } from './dto/update-event-consumption-modifier.dto';

@Controller('event-consumption-modifier')
export class EventConsumptionModifierController {
  constructor(private readonly eventConsumptionModifierService: EventConsumptionModifierService) {}

  @Post()
  create(@Body() createEventConsumptionModifierDto: CreateEventConsumptionModifierDto) {
    return this.eventConsumptionModifierService.create(createEventConsumptionModifierDto);
  }

  @Get()
  findAll() {
    return this.eventConsumptionModifierService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventConsumptionModifierService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventConsumptionModifierDto: UpdateEventConsumptionModifierDto) {
    return this.eventConsumptionModifierService.update(+id, updateEventConsumptionModifierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventConsumptionModifierService.remove(+id);
  }
}
