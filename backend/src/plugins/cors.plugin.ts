import fastifyCors from "@fastify/cors";
import type { NestFastifyApplication } from "@nestjs/platform-fastify";

export default async function corsPlugin(instance: NestFastifyApplication) {
	instance.register(fastifyCors, {
		origin: process.env.CLIENT_ORIGIN || "http://localhost:3000",
		methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
		allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
		credentials: true,
		maxAge: 86400,
	});
}
