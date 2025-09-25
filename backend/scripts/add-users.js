import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import pkg from 'pg';

dotenv.config();
const { Client } = pkg;

async function addUsers() {
  const client = new Client({ connectionString: process.env.DATABASE_URL });
  await client.connect();
  try {
    const users = [
      { email: 'aeokd@gmx.de', password: 'admin@123', first_name: 'Admin', last_name: 'User', role: 'admin', is_admin: true },
      { email: 'anduamlakalehegne@gmail.com', password: 'admin@123', first_name: 'Admin', last_name: 'User', role: 'admin', is_admin: true },
    ];
    for (const u of users) {
      const hash = await bcrypt.hash(u.password, 10);
      await client.query(
        `INSERT INTO profiles (email, first_name, last_name, role, is_admin, password_hash)
         VALUES ($1, $2, $3, $4, $5, $6)
         ON CONFLICT (email) DO UPDATE SET first_name=EXCLUDED.first_name, last_name=EXCLUDED.last_name, role=EXCLUDED.role, is_admin=EXCLUDED.is_admin, password_hash=EXCLUDED.password_hash`,
        [u.email, u.first_name, u.last_name, u.role, u.is_admin, hash]
      );
    }
    console.log('Users added/updated successfully');
  } catch (e) {
    console.error('Failed to add users:', e.message);
    process.exitCode = 1;
  } finally {
    await client.end();
  }
}

addUsers();


