import { NotFoundException } from '@nestjs/common';
import { ProductsRepositoryContract } from '../contracts/product.repository.contract';
import { Product } from '../product.entity';

type ServiceFindOneProduct = (repo: ProductsRepositoryContract, id: string) => Promise<Product>;

export const serviceFindOneProduct: ServiceFindOneProduct = async (repo, id) => {
  const product = await repo.findUnique({ id });

  if (!product) throw new NotFoundException('Product not found.');

  return product;
};
