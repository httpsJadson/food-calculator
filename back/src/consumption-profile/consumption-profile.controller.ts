import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConsumptionProfileService } from './consumption-profile.service';
import { CreateConsumptionProfileDto } from './dto/create-consumption-profile.dto';
import { UpdateConsumptionProfileDto } from './dto/update-consumption-profile.dto';

@Controller('consumption-profile')
export class ConsumptionProfileController {
  constructor(private readonly consumptionProfileService: ConsumptionProfileService) {}

  @Post()
  create(@Body() createConsumptionProfileDto: CreateConsumptionProfileDto) {
    return this.consumptionProfileService.create(createConsumptionProfileDto);
  }

  @Get()
  findAll() {
    return this.consumptionProfileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consumptionProfileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConsumptionProfileDto: UpdateConsumptionProfileDto) {
    return this.consumptionProfileService.update(+id, updateConsumptionProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consumptionProfileService.remove(+id);
  }
}
