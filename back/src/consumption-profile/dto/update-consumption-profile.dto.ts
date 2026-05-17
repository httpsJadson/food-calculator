import { PartialType } from '@nestjs/swagger';
import { CreateConsumptionProfileDto } from './create-consumption-profile.dto';

export class UpdateConsumptionProfileDto extends PartialType(CreateConsumptionProfileDto) {}
