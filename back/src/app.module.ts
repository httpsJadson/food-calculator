import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { FoodModule } from './food/food.module';
import { ConsumptionProfileModule } from './consumption-profile/consumption-profile.module';
import { ThrottlerModule } from '@nestjs/throttler/dist/throttler.module';
import { FoodCalculateModule } from './food-calculate/food-calculate.module';
import { EventConsumptionModifierModule } from './event-consumption-modifier/event-consumption-modifier.module';

@Module({
  imports: [
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 20,
    }]),
    UserModule, 
    AuthModule, 
    FoodModule, 
    ConsumptionProfileModule, FoodCalculateModule, EventConsumptionModifierModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}