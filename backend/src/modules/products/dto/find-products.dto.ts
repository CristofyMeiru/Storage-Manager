import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class FindProductsQueryDto {
  @ApiProperty({ type: 'number', required: false, example: 20, default: 20 })
  @IsInt({ message: 'Paginação precisa de números inteiros' })
  @IsOptional()
  @IsPositive({ message: 'Limit precisa ser um valor positivo.' })
  @Type(() => Number)
  limit: number = 20;

  @ApiProperty({ type: 'number', required: false, example: 1, default: 1 })
  @IsInt({ message: 'Paginação precisa de números inteiros' })
  @IsOptional()
  @IsPositive({ message: 'Página precisa ser um valor positivo.' })
  @Max(100)
  @Min(1)
  @Type(() => Number)
  page: number = 1;
}
