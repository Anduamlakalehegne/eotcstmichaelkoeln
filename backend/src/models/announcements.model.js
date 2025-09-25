import { pool } from '../config/db.js';

export const AnnouncementsModel = {
	async findAll() {
		const { rows } = await pool.query('SELECT * FROM announcements ORDER BY created_at DESC, id DESC');
		return rows;
	},
	async findById(id) {
		const { rows } = await pool.query('SELECT * FROM announcements WHERE id = $1', [id]);
		return rows[0] || null;
	},
	async create(data) {
		const { title, content, priority = 'normal', is_active = true } = data;
		const { rows } = await pool.query(
			`INSERT INTO announcements (title, content, priority, is_active) VALUES ($1,$2,$3,$4) RETURNING *`,
			[title, content, priority, is_active]
		);
		return rows[0];
	},
	async update(id, data) {
		const { title, content, priority, is_active } = data;
		const { rows } = await pool.query(
			`UPDATE announcements SET title=$1, content=$2, priority=$3, is_active=$4, updated_at=NOW() WHERE id=$5 RETURNING *`,
			[title, content, priority, is_active, id]
		);
		return rows[0];
	},
	async remove(id) {
		const { rows } = await pool.query('DELETE FROM announcements WHERE id=$1 RETURNING id', [id]);
		return rows[0];
	},
};


