import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Products")
@Controller("products")
export class ProductsController {
	@Get("")
	getProducts() {
		return { message: "List of products" };
	}
}
