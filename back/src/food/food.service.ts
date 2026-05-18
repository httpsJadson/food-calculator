import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { PrismaService } from '../database/prisma.service';
import { FoodCategory, MeasurementUnit } from '@prisma/client';

@Injectable()
export class FoodService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createFoodDto: CreateFoodDto) {
    try {
      return await this.prismaService.foodItem.create({
        data: {
          name: createFoodDto.name,
          description: createFoodDto.description,
          category: createFoodDto.category as FoodCategory,
          unit: createFoodDto.unit as MeasurementUnit,
          consumptionPerPerson: createFoodDto.consumptionPerPerson,
          wastePercentage: createFoodDto.wastePercentage,
          packageSize: createFoodDto.packageSize,
          isActive: createFoodDto.isActive,
        },
      });
    } catch (error: any) {
      throw new BadRequestException('Failed to create food item');
    }
  }

  async findAll() {
    return await this.prismaService.foodItem.findMany({
      where: { isActive: true },
    });
  }

  async findOne(id: number) {
    const food = await this.prismaService.foodItem.findUnique({
      where: { id },
    });

    if (!food) {
      throw new NotFoundException(`Food item with ID ${id} not found`);
    }

    return food;
  }

  async update(id: number, updateFoodDto: UpdateFoodDto) {
    try {
      return await this.prismaService.foodItem.update({
        where: { id },
        data: {
          name: updateFoodDto.name,
          description: updateFoodDto.description,
          category: updateFoodDto.category as FoodCategory,
          unit: updateFoodDto.unit as MeasurementUnit,
          consumptionPerPerson: updateFoodDto.consumptionPerPerson,
          wastePercentage: updateFoodDto.wastePercentage,
          packageSize: updateFoodDto.packageSize,
          isActive: updateFoodDto.isActive,
        },
      });
    } catch (error: any) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Food item with ID ${id} not found`);
      }
      throw new BadRequestException('Failed to update food item');
    }
  }

  async remove(id: number) {
    try {
      return await this.prismaService.foodItem.delete({
        where: { id },
      });
    } catch (error: any) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Food item with ID ${id} not found`);
      }
      throw new BadRequestException('Failed to delete food item');
    }
  }
}
