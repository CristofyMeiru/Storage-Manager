import { ProductsRepositoryContract } from '../contracts/product.repository.contract';
import { CreateProductDto } from '../dto/create-product.dto';
import { Product, ProductInsert } from '../product.entity';

type ServiceCreateProduct = (repo: ProductsRepositoryContract, dto: CreateProductDto) => Promise<Product>;

export const serviceCreateProduct: ServiceCreateProduct = async (repo, dto) => {
  const newProduct: ProductInsert = {
    id: crypto.randomUUID(),
    name: dto.name,
    description: dto.description,
    sku: dto.sku,
    price: dto.price,
    stock: dto.stock ?? 0,
    category: dto.category,
    brand: dto.brand,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  return repo.create(newProduct);
};
