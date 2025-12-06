import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';
import { Product } from '../product.entity';

const productExample = {
  id: '1750724a-9951-48ee-9a87-74cc7ef59cc4',
  name: 'string',
  description: 'string',
  brand: 'string',
  sku: 'string',
  price: 192.05,
  stock: 20,
  category: 'string',
  createdAt: 'string',
  updatedAt: 'string',
};

export class DeleteManyProductsResponseDto {
  @ApiProperty({
    type: 'string',
    description: 'Response message after deleting products',
    example: 'string',
  })
  @IsString()
  message: string;

  @ApiProperty({
    example: [productExample],
    isArray: true,
    description: 'Array of deleted products',
  })
  @IsArray()
  deletedProducts: Product[];
}
