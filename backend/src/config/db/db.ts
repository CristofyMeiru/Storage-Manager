import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';

const client = createClient({ url: 'file:dev.db' });
const db = drizzle({ client });
export default db;
