import { Module } from '@nestjs/common';
import { ConsumptionProfileService } from './consumption-profile.service';
import { ConsumptionProfileController } from './consumption-profile.controller';

@Module({
  controllers: [ConsumptionProfileController],
  providers: [ConsumptionProfileService],
})
export class ConsumptionProfileModule {}
