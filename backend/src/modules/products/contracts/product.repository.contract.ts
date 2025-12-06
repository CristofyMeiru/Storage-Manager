import { FindProductsQueryDto } from '../dto/find-products.dto';
import { Product, ProductInsert } from '../product.entity';
import { SearchableProductFields } from '../types/searchable-product-fields.type';

export interface ProductsRepositoryContract {
  create(dto: ProductInsert): Promise<Product>;
  find(fields: SearchableProductFields, options: FindProductsQueryDto): Promise<Product[]>;
  findUnique(fields: SearchableProductFields): Promise<Product>;
  deleteById(id: string): Promise<Product>;
}
