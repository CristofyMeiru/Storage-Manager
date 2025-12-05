import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { auth } from "@src/lib/auth";
import { AuthModule } from "@thallesp/nestjs-better-auth";

import { validateEnv } from "./config/env.validation";
import { ProductsModule } from "./modules/products/products.module";

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			validate: validateEnv,
		}),
		AuthModule.forRoot({ auth }),
		ProductsModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
