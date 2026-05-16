import { Type } from 'class-transformer';
import { IsInt, IsOptional, Min, Max, IsString, IsEnum } from 'class-validator';
import { OrderDirection } from '../enums/order.enum';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class PaginationDto {
  @ApiPropertyOptional({ default: 1 })
  @IsOptional()
  @Type(() => Number)
  page?: number = 1;

  @ApiPropertyOptional({ default: 20 })
  @IsOptional()
  @Type(() => Number)
  limit?: number = 20;

  @ApiPropertyOptional({ enum: OrderDirection, default: 'asc' })
  @IsOptional()
  @IsEnum(OrderDirection)
  orderDir?: OrderDirection = OrderDirection.ASC;
}
