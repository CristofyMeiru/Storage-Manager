import { Injectable } from '@nestjs/common';
import { ProductsRepositoryContract } from './contracts/product.repository.contract';
import { FindProductsQueryDto } from './dto/find-products.dto';
import { Product } from './product.entity';
import { createProduct } from './repository/create-product';
import { deleteProductById } from './repository/delete-product';
import { SearchableProductFields } from './types/searchable-product-fields.type';

@Injectable()
export class ProductsRepository implements ProductsRepositoryContract {
  create = createProduct;

  deleteById = deleteProductById;

  find(fields: SearchableProductFields, options: FindProductsQueryDto): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }

  findUnique(fields: SearchableProductFields): Promise<Product> {
    throw new Error('Method not implemented.');
  }
}
