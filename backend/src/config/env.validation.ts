import { plainToInstance } from "class-transformer";
import { IsEnum, IsNumber, IsString, validateSync } from "class-validator";

export class EnvSchema {
	@IsNumber({}, { message: "PORT must be a number." })
	public PORT: number;

	@IsEnum(["development", "production", "test"])
	public NODE_ENV: "development" | "production" | "test";

	@IsString()
	public DATABASE_URL: string;

	@IsString()
	public APP_NAME: string;
}

export function validateEnv(config: Record<string, unknown>) {
	const validatedConfig = plainToInstance(EnvSchema, config, {
		enableImplicitConversion: true,
	});

	const errors = validateSync(validatedConfig, {
		skipMissingProperties: false,
	});

	if (errors.length > 0) {
		throw new Error(errors.toString());
	}

	return validatedConfig;
}
