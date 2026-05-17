import { Module } from '@nestjs/common';
import { FoodCalculateService } from './food-calculate.service';
import { FoodCalculateController } from './food-calculate.controller';

@Module({
  controllers: [FoodCalculateController],
  providers: [FoodCalculateService],
})
export class FoodCalculateModule {}
