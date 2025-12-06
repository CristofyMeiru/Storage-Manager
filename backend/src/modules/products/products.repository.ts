import { Injectable } from '@nestjs/common';
import { ProductsRepositoryContract } from './contracts/product.repository.contract';
import { FindProductsQueryDto } from './dto/find-products.dto';
import { Product, ProductInsert } from './product.entity';
import { repoCreateProduct } from './repository/create-product.repository';
import { repoDeleteProducts } from './repository/delete-products.repository';
import { SearchableProductFields } from './types/searchable-product-fields.type';

@Injectable()
export class ProductsRepository implements ProductsRepositoryContract {
  create(dto: ProductInsert): Promise<Product> {
    return repoCreateProduct(dto);
  }
  deleteMany(ids: string[]): Promise<Product[]> {
    return repoDeleteProducts(ids);
  }

  find(fields: SearchableProductFields, options: FindProductsQueryDto): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }

  findUnique(fields: SearchableProductFields): Promise<Product> {
    throw new Error('Method not implemented.');
  }
}
