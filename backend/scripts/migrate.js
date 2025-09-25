import fs from 'fs';
import path from 'path';
import url from 'url';
import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Client } = pkg;
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const sqlPath = path.resolve(__dirname, '..', 'complete-database-setup.sql');

async function run() {
	const client = new Client({ connectionString: process.env.DATABASE_URL });
	await client.connect();
	const sql = fs.readFileSync(sqlPath, 'utf8');
	try {
		await client.query('BEGIN');
		await client.query(sql);
		await client.query('COMMIT');
		console.log('Migration completed successfully');
	} catch (e) {
		await client.query('ROLLBACK');
		console.error('Migration failed:', e.message);
		process.exitCode = 1;
	} finally {
		await client.end();
	}
}

run();


