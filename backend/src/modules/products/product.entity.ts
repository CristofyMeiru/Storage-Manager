import { products } from '@/src/config/db/schemas/products-schema';

export type ProductInsert = typeof products.$inferInsert;
export type Product = typeof products.$inferSelect;
