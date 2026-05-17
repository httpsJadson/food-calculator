import { PartialType } from '@nestjs/swagger';
import { CreateFoodCalculateDto } from './create-food-calculate.dto';

export class UpdateFoodCalculateDto extends PartialType(CreateFoodCalculateDto) {}
