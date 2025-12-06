import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'Camiseta Preta',
    description: 'Nome do produto',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Camiseta confortável 100% algodão',
    required: false,
    description: 'Descrição do produto',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    example: 'SKU-ABC-123',
    description: 'Código único de identificação do produto',
  })
  @IsString()
  @IsNotEmpty()
  sku: string;

  @ApiProperty({
    example: 129.9,
    description: 'Preço do produto',
  })
  @Type(() => Number)
  @IsNumber()
  price: number;

  @ApiProperty({
    example: 10,
    required: false,
    description: 'Quantidade em estoque',
  })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  stock?: number;

  @ApiProperty({
    example: 'Roupas',
    required: false,
    description: 'Categoria do produto',
  })
  @IsString()
  @IsOptional()
  category?: string;

  @ApiProperty({
    example: 'Nike',
    required: false,
    description: 'Marca do produto',
  })
  @IsString()
  @IsOptional()
  brand?: string;
}
