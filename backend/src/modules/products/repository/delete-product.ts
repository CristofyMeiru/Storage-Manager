import db from '@/src/config/db/db';
import { products } from '@/src/config/db/schemas/products-schema';
import { eq } from 'drizzle-orm';
import { ProductsRepositoryContract } from '../contracts/product.repository.contract';

export const deleteProductById: ProductsRepositoryContract['deleteById'] = async (id) => {
  const [deletedProduct] = await db.delete(products).where(eq(products.id, id)).returning();
  return deletedProduct;
};
