import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from '../product.entity';

export interface ProductsServiceContract {
  create(dto: CreateProductDto): Promise<Product>;
  removeMany(ids: string[]): Promise<Product[]>;
}
