import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "../config/db/db";

export const auth = betterAuth({
	basePath: "/auth",
	database: drizzleAdapter(db, {
		provider: "sqlite",
		usePlural: true,
	}),
	emailAndPassword: {
		enabled: true,
	},
});
