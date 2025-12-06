import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { ProductDto } from '../dto/product.dto';

export class CreateProductResponseDto {
  @ApiProperty({ type: 'string' })
  @IsString()
  message: string;

  @ApiProperty({ type: ProductDto })
  product: ProductDto;
}
