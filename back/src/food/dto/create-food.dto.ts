import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { FoodCategory } from "src/common/enums/foodCategory.enum";
import { MeasurementUnit } from "src/common/enums/measureUnit.enum";

export class CreateFoodDto {

  @ApiProperty({ 
    description: 'Name of the food' , 
    example: 'Apple' 
  })
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name must be a string' })
  name: string;

  @ApiProperty({ 
    description: 'Description of the food' , 
    example: 'A sweet and sour fruit' 
  })
  @IsString({ message: 'Description must be a string' })
  description?: string;

  @ApiProperty({ 
    description: 'Category of the food' , 
    example: FoodCategory.PROTEIN 
  })
  @IsNotEmpty({ message: 'Category is required' })
  category: FoodCategory;

  @ApiProperty({ 
    description: 'Unit of measurement' , 
    example: MeasurementUnit.GRAM 
  })
  @IsNotEmpty({ message: 'Unit is required' })
  unit: MeasurementUnit;

  @ApiProperty({ 
    description: 'Consumption per person' , 
    example: 100 
  })
  @IsNotEmpty({ message: 'Consumption per person is required' })
  consumptionPerPerson: number;
  
  @ApiProperty({ 
    description: 'Waste percentage' , 
    example: 10 
  })
  @IsNotEmpty({ message: 'Waste percentage is required' })
  wastePercentage: number;

  @ApiProperty({ 
    description: 'Package size' , 
    example: 100 
  })
  @IsNumber()
  packageSize?: number;

  @ApiProperty({ 
    description: 'Is active' , 
    example: true 
  })
  @IsNotEmpty({ message: 'Is active is required' })
  isActive: boolean;
}
