import { Injectable } from '@nestjs/common';
import { CreateFoodCalculateDto } from './dto/create-food-calculate.dto';
import { UpdateFoodCalculateDto } from './dto/update-food-calculate.dto';

@Injectable()
export class FoodCalculateService {
  create(createFoodCalculateDto: CreateFoodCalculateDto) {
    return 'This action adds a new foodCalculate';
  }

  findAll() {
    return `This action returns all foodCalculate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} foodCalculate`;
  }

  update(id: number, updateFoodCalculateDto: UpdateFoodCalculateDto) {
    return `This action updates a #${id} foodCalculate`;
  }

  remove(id: number) {
    return `This action removes a #${id} foodCalculate`;
  }
}
