import { ProductsRepositoryContract } from '../contracts/product.repository.contract';
import { Product } from '../product.entity';

type ServiceDeleteProducts = (repo: ProductsRepositoryContract, ids: string[]) => Promise<Product[]>;

export const serviceDeleteProducts: ServiceDeleteProducts = async (repo, ids) => {
  return repo.deleteMany(ids);
};
