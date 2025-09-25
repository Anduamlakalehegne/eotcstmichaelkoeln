import { pool } from '../config/db.js';

export const TagsModel = {
	async findAll() {
		const { rows } = await pool.query('SELECT * FROM tags ORDER BY name ASC');
		return rows;
	},
	async findById(id) {
		const { rows } = await pool.query('SELECT * FROM tags WHERE id = $1', [id]);
		return rows[0] || null;
	},
	async create(data) {
		const { name } = data;
		const { rows } = await pool.query('INSERT INTO tags (name) VALUES ($1) RETURNING *', [name]);
		return rows[0];
	},
	async update(id, data) {
		const { name } = data;
		const { rows } = await pool.query('UPDATE tags SET name=$1 WHERE id=$2 RETURNING *', [name, id]);
		return rows[0];
	},
	async remove(id) {
		const { rows } = await pool.query('DELETE FROM tags WHERE id=$1 RETURNING id', [id]);
		return rows[0];
	},
};


