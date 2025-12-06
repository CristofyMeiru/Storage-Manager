import { BadRequestResponseDto } from '@/src/shared/dto/bad-request.response-dto';
import { InternalServerErrorResponseDto } from '@/src/shared/dto/internal-server-error.response-dto';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiInternalServerErrorResponse, ApiOkResponse } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { DeleteManyProductBodyDto } from './dto/delete-many-products.dto';
import { FindProductsQueryDto } from './dto/find-products.dto';
import { ProductDto } from './dto/product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { CreateProductResponseDto } from './response-dto/create-product.response-dto';
import { DeleteManyProductsResponseDto } from './response-dto/delete-many-products.response.dto';

@ApiInternalServerErrorResponse({ type: InternalServerErrorResponseDto })
@ApiBadRequestResponse({ type: BadRequestResponseDto })
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOkResponse({ type: CreateProductResponseDto })
  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<CreateProductResponseDto> {
    const createdProduct = await this.productsService.create(createProductDto);
    return {
      message: 'Product successfully created.',
      product: createdProduct,
    };
  }

  @ApiOkResponse({ type: ProductDto, isArray: true })
  @Get()
  findAll(@Query() query: FindProductsQueryDto) {
    return this.productsService.findAll();
  }

  @ApiOkResponse({ type: ProductDto })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductDto> {
    const productFinded = await this.productsService.findOne(id);

    return productFinded;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @ApiOkResponse({ type: DeleteManyProductsResponseDto })
  @Delete('bulk')
  async removeMany(@Body() body: DeleteManyProductBodyDto): Promise<DeleteManyProductsResponseDto> {
    const deletedProducts = await this.productsService.removeMany(body.ids);
    return {
      message: 'Products deleted successfully',
      deletedProducts,
    };
  }
}
