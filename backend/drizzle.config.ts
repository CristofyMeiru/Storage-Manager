import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'sqlite',
  schema: './src/config/db/schemas',
  out: './drizzle',
  dbCredentials: {
    url: process.env.DATABASE_URL || './dev.db',
  },
});
