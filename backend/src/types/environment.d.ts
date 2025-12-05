import type { EnvSchema } from "../config/env.validation";

declare global {
	namespace NodeJS {
		interface ProcessEnv extends Record<keyof EnvSchema, string> {}
	}
}
