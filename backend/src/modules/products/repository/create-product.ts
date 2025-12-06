import db from '@/src/config/db/db';
import { products } from '@/src/config/db/schemas/products-schema';
import { ProductsRepositoryContract } from '../contracts/product.repository.contract';

export const createProduct: ProductsRepositoryContract['create'] = async (dto) => {
  const [result] = await db.insert(products).values(dto).returning();
  return result;
};
