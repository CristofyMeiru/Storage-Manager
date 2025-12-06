import { Injectable } from '@nestjs/common';
import { ProductsServiceContract } from './contracts/product.service.contract';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.entity';
import { ProductsRepository } from './products.repository';
import { serviceCreateProduct } from './services/create-product.service';
import { serviceDeleteProducts } from './services/remove-many.service';

@Injectable()
export class ProductsService implements ProductsServiceContract {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async create(dto: CreateProductDto): Promise<Product> {
    return serviceCreateProduct(this.productsRepository, dto);
  }

  async removeMany(ids: string[]): Promise<Product[]> {
    return serviceDeleteProducts(this.productsRepository, ids);
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
}
