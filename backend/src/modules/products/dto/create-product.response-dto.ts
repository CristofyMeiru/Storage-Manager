import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { ProductDto } from './product';

export class CreateProductResponseDto {
  @ApiProperty({ type: 'string' })
  @IsString()
  message: string;

  @ApiProperty({ type: ProductDto })
  product: ProductDto;
}
