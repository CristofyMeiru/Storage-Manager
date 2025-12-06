import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive, Max, Min } from 'class-validator';

export class FindProductsQueryDto {
  @ApiProperty({ type: 'number', required: false, example: 20, default: 20 })
  @IsInt({ message: 'Paginação precisa de números inteiros' })
  @IsOptional()
  @IsPositive({ message: 'Página precisa ser um valor positivo.' })
  limit: number = 20;

  @ApiProperty({ type: 'number', required: false, example: 1, default: 1 })
  @IsInt({ message: 'Paginação precisa de números inteiros' })
  @IsOptional()
  @IsPositive({ message: 'Página precisa ser um valor positivo.' })
  @Max(100)
  @Min(1)
  page: number = 1;
}
