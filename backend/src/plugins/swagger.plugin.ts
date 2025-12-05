import type { NestFastifyApplication } from "@nestjs/platform-fastify";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function swaggerPlugin(instance: NestFastifyApplication): Promise<void> {
	try {
		const config = new DocumentBuilder()
			.setTitle("Cats API")
			.setDescription("The cats API description")
			.setVersion("1.0")
			.addTag("cats")
			.build();
		const document = SwaggerModule.createDocument(instance, config);
		SwaggerModule.setup("api", instance, document);
	} catch (error) {
		console.log(error);
	}
}

export default swaggerPlugin;
