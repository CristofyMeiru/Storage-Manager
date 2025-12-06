import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductInsert } from './product.entity';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  create(createProductDto: CreateProductDto) {
    const newProduct: ProductInsert = {
      id: crypto.randomUUID(),
      name: createProductDto.name,
      description: createProductDto.description,
      sku: createProductDto.sku,
      price: createProductDto.price,
      stock: createProductDto.stock ?? 0,
      category: createProductDto.category,
      brand: createProductDto.brand,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    return this.productsRepository.create(newProduct);
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
