import { Injectable } from '@nestjs/common';
import { CreateConsumptionProfileDto } from './dto/create-consumption-profile.dto';
import { UpdateConsumptionProfileDto } from './dto/update-consumption-profile.dto';

@Injectable()
export class ConsumptionProfileService {
  create(createConsumptionProfileDto: CreateConsumptionProfileDto) {
    return 'This action adds a new consumptionProfile';
  }

  findAll() {
    return `This action returns all consumptionProfile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} consumptionProfile`;
  }

  update(id: number, updateConsumptionProfileDto: UpdateConsumptionProfileDto) {
    return `This action updates a #${id} consumptionProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} consumptionProfile`;
  }
}
