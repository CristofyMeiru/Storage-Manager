import { ProductsRepositoryContract } from '../contracts/product.repository.contract';
import { FindProductsQueryDto } from '../dto/find-products.dto';
import { Product } from '../product.entity';

type ServiceFindProducts = (repo: ProductsRepositoryContract, options: FindProductsQueryDto) => Promise<Product[]>;

export const serviceFindProducts: ServiceFindProducts = async (repo, options) => {
  const products = await repo.find({}, options);
  return products;
};
