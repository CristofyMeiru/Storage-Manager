import db from '@/src/config/db/db';
import { products } from '@/src/config/db/schemas/products-schema';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductInsert } from './product.entity';

@Injectable()
export class ProductsRepository {
  async create(dto: ProductInsert) {
    const [result] = await db.insert(products).values(dto).returning();
    return result;
  }
}
