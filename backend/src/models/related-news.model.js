import { pool } from '../config/db.js';

export const RelatedNewsModel = {
	async findAll() {
		const { rows } = await pool.query('SELECT * FROM related_news ORDER BY id ASC');
		return rows;
	},
	async findById(id) {
		const { rows } = await pool.query('SELECT * FROM related_news WHERE id = $1', [id]);
		return rows[0] || null;
	},
	async create(data) {
		const { news_id, related_news_id } = data;
		const { rows } = await pool.query('INSERT INTO related_news (news_id, related_news_id) VALUES ($1,$2) RETURNING *', [news_id, related_news_id]);
		return rows[0];
	},
	async update(id, data) {
		const { news_id, related_news_id } = data;
		const { rows } = await pool.query('UPDATE related_news SET news_id=$1, related_news_id=$2 WHERE id=$3 RETURNING *', [news_id, related_news_id, id]);
		return rows[0];
	},
	async remove(id) {
		const { rows } = await pool.query('DELETE FROM related_news WHERE id=$1 RETURNING id', [id]);
		return rows[0];
	},
};


