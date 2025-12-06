import { CreateProductDto } from '../dto/create-product.dto';
import { FindProductsQueryDto } from '../dto/find-products.dto';
import { Product } from '../product.entity';

export interface ProductsServiceContract {
  create(dto: CreateProductDto): Promise<Product>;
  findOne(id: string): Promise<Product>;
  findAll(options: FindProductsQueryDto): Promise<Product[]>;
  removeMany(ids: string[]): Promise<Product[]>;
}
