import { Injectable } from '@nestjs/common';
import { ProductsRepositoryContract } from './contracts/product.repository.contract';
import { FindProductsQueryDto } from './dto/find-products.dto';
import { Product, ProductInsert } from './product.entity';
import { repoCreateProduct } from './repository/create-product.repository';
import { repoDeleteProducts } from './repository/delete-products.repository';
import { repoFindProducts } from './repository/find-products.repository';
import { repoFindUniqueProduct } from './repository/find-unique-product.repository';
import { SearchableProductFields } from './types/searchable-product-fields.type';

@Injectable()
export class ProductsRepository implements ProductsRepositoryContract {
  async create(dto: ProductInsert): Promise<Product> {
    return await repoCreateProduct(dto);
  }
  async deleteMany(ids: string[]): Promise<Product[]> {
    return await repoDeleteProducts(ids);
  }

  async find(fields: Partial<SearchableProductFields>, options: FindProductsQueryDto): Promise<Product[]> {
    return await repoFindProducts(fields, options);
  }

  async findUnique(fields: Partial<SearchableProductFields>): Promise<Product> {
    return await repoFindUniqueProduct(fields);
  }
}
