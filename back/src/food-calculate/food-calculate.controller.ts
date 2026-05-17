import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FoodCalculateService } from './food-calculate.service';
import { CreateFoodCalculateDto } from './dto/create-food-calculate.dto';
import { UpdateFoodCalculateDto } from './dto/update-food-calculate.dto';

@Controller('food-calculate')
export class FoodCalculateController {
  constructor(private readonly foodCalculateService: FoodCalculateService) {}

  @Post()
  create(@Body() createFoodCalculateDto: CreateFoodCalculateDto) {
    return this.foodCalculateService.create(createFoodCalculateDto);
  }

  @Get()
  findAll() {
    return this.foodCalculateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodCalculateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFoodCalculateDto: UpdateFoodCalculateDto) {
    return this.foodCalculateService.update(+id, updateFoodCalculateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodCalculateService.remove(+id);
  }
}
