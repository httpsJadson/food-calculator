import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateConsumptionProfileDto {
  
  @ApiProperty({
    description: 'Name of the consumption profile',
    example: 'Standard Adult'
  })
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name must be a string' })
  name: string;

  @ApiProperty({
    description: 'Adult equivalent value',
    example: 1.0
  })
  @IsNotEmpty({ message: 'Adult equivalent is required' })
  @IsNumber({}, { message: 'Adult equivalent must be a number' })
  adultEquivalent: number;
}
