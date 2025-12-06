import db from '@/src/config/db/db';
import { products } from '@/src/config/db/schemas/products-schema';
import { inArray } from 'drizzle-orm';
import { ProductsRepositoryContract } from '../contracts/product.repository.contract';

export const repoDeleteProducts: ProductsRepositoryContract['deleteMany'] = async (ids) => {
  const deletedProduct = await db.delete(products).where(inArray(products.id, ids)).returning();
  return deletedProduct;
};
