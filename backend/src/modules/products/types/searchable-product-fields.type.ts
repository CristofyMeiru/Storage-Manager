import { Product } from '../product.entity';

export type SearchableProductFields = Omit<Product, 'createdAt' | 'updatedAt'>;
