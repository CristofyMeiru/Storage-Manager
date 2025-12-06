import { Injectable } from '@nestjs/common';
import { ProductsServiceContract } from './contracts/product.service.contract';
import { CreateProductDto } from './dto/create-product.dto';
import { FindProductsQueryDto } from './dto/find-products.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.entity';
import { ProductsRepository } from './products.repository';
import { serviceCreateProduct } from './services/create-product.service';
import { serviceFindOneProduct } from './services/find-one-product.service';
import { serviceFindProducts } from './services/find-products.service';
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

  async findAll(options: FindProductsQueryDto): Promise<Product[]> {
    return serviceFindProducts(this.productsRepository, options);
  }

  async findOne(id: string): Promise<Product> {
    return await serviceFindOneProduct(this.productsRepository, id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }
}
