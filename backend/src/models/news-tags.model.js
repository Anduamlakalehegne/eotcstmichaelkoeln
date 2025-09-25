import { pool } from '../config/db.js';

export const NewsTagsModel = {
	async findAll() {
		const { rows } = await pool.query('SELECT * FROM news_tags ORDER BY id ASC');
		return rows;
	},
	async findById(id) {
		const { rows } = await pool.query('SELECT * FROM news_tags WHERE id = $1', [id]);
		return rows[0] || null;
	},
	async create(data) {
		const { news_id, tag_id } = data;
		const { rows } = await pool.query('INSERT INTO news_tags (news_id, tag_id) VALUES ($1,$2) RETURNING *', [news_id, tag_id]);
		return rows[0];
	},
	async update(id, data) {
		const { news_id, tag_id } = data;
		const { rows } = await pool.query('UPDATE news_tags SET news_id=$1, tag_id=$2 WHERE id=$3 RETURNING *', [news_id, tag_id, id]);
		return rows[0];
	},
	async remove(id) {
		const { rows } = await pool.query('DELETE FROM news_tags WHERE id=$1 RETURNING id', [id]);
		return rows[0];
	},
};


