import db from '@/src/config/db/db';
import { products } from '@/src/config/db/schemas/products-schema';
import { and, eq } from 'drizzle-orm';
import { ProductsRepositoryContract } from '../contracts/product.repository.contract';

export const repoFindUniqueProduct: ProductsRepositoryContract['findUnique'] = async (fields) => {
  const allowedFilters: Partial<Record<keyof typeof products, any>> = {
    id: products.id,
    name: products.name,
    description: products.description,
    brand: products.brand,
    sku: products.sku,
    price: products.price,
    stock: products.stock,
    category: products.category,
  };

  const conditions = Object.entries(fields).flatMap(([key, value]) => {
    const column = allowedFilters[key as keyof typeof allowedFilters];
    if (column && value !== undefined) return [eq(column, value)];
    return [];
  });

  let query: any = db.select().from(products);

  if (conditions.length) query = query.where(and(...conditions));

  const result = await query;

  return result[0];
};
