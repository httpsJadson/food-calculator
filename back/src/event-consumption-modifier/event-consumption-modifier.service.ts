import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventConsumptionModifierDto } from './dto/create-event-consumption-modifier.dto';
import { UpdateEventConsumptionModifierDto } from './dto/update-event-consumption-modifier.dto';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class EventConsumptionModifierService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createEventConsumptionModifierDto: CreateEventConsumptionModifierDto) {
    try {
      return await this.prismaService.eventConsumptionModifier.create({
        data: {
          eventType: createEventConsumptionModifierDto.eventType,
          multiplier: createEventConsumptionModifierDto.multiplier,
        },
      });
    } catch (error: any) {
      throw new BadRequestException('Failed to create event consumption modifier');
    }
  }

  async findAll() {
    return await this.prismaService.eventConsumptionModifier.findMany();
  }

  async findOne(id: number) {
    const modifier = await this.prismaService.eventConsumptionModifier.findUnique({
      where: { id },
    });

    if (!modifier) {
      throw new NotFoundException(`Event consumption modifier with ID ${id} not found`);
    }

    return modifier;
  }

  async update(id: number, updateEventConsumptionModifierDto: UpdateEventConsumptionModifierDto) {
    try {
      return await this.prismaService.eventConsumptionModifier.update({
        where: { id },
        data: updateEventConsumptionModifierDto,
      });
    } catch (error: any) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Event consumption modifier with ID ${id} not found`);
      }
      throw new BadRequestException('Failed to update event consumption modifier');
    }
  }

  async remove(id: number) {
    try {
      return await this.prismaService.eventConsumptionModifier.delete({
        where: { id },
      });
    } catch (error: any) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`Event consumption modifier with ID ${id} not found`);
      }
      throw new BadRequestException('Failed to delete event consumption modifier');
    }
  }
}
