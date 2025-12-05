import { sql } from "drizzle-orm";
import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const products = sqliteTable("products", {
	id: integer("id").primaryKey(),
	name: text("name").notNull(),
	description: text("description"),
	sku: text("sku").unique().notNull(),
	price: real("price").notNull(),
	stock: integer("stock").default(0).notNull(),
	category: text("category"),
	brand: text("brand"),
	createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: text("updated_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
});
