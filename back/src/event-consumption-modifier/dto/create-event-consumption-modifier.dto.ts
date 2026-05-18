import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";
import { EventType } from "src/common/enums/eventType.enum";

export class CreateEventConsumptionModifierDto {
  
  @ApiProperty({
    description: 'Event type',
    example: EventType.BBQ
  })
  @IsNotEmpty({ message: 'Event type is required' })
  eventType: EventType;

  @ApiProperty({
    description: 'Consumption multiplier for the event',
    example: 1.5
  })
  @IsNotEmpty({ message: 'Multiplier is required' })
  @IsNumber({}, { message: 'Multiplier must be a number' })
  multiplier: number;
}
