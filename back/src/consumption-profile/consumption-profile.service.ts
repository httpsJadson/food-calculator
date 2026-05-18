import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateConsumptionProfileDto } from './dto/create-consumption-profile.dto';
import { UpdateConsumptionProfileDto } from './dto/update-consumption-profile.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class ConsumptionProfileService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createConsumptionProfileDto: CreateConsumptionProfileDto) {
    try {
      return await this.prismaService.consumptionProfile.create({
        data: {
          name: createConsumptionProfileDto.name,
          adultEquivalent: createConsumptionProfileDto.adultEquivalent,
        },
      });
    } catch (error: any) {
      throw new BadRequestException('Failed to create consumption profile');
    }
  }

  async findAll() {
    return await this.prismaService.consumptionProfile.findMany();
  }

  async findOne(id: number) {
    const profile = await this.prismaService.consumptionProfile.findUnique({
      where: { id },
    });

    if (!profile) {
      throw new NotFoundException(`Consumption profile with ID ${id} not found`);
    }

    return profile;
  }

  async update(id: number, updateConsumptionProfileDto: UpdateConsumptionProfileDto) {
    try {
      return await this.prismaService.consumptionProfile.update({
        where: { id },
        data: updateConsumptionProfileDto,
      });
    } catch (error: any) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Consumption profile with ID ${id} not found`);
      }
      throw new BadRequestException('Failed to update consumption profile');
    }
  }

  async remove(id: number) {
    try {
      return await this.prismaService.consumptionProfile.delete({
        where: { id },
      });
    } catch (error: any) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Consumption profile with ID ${id} not found`);
      }
      throw new BadRequestException('Failed to delete consumption profile');
    }
  }
}
