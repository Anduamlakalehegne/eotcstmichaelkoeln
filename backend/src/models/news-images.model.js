import { pool } from '../config/db.js';

export const NewsImagesModel = {
	async findAll() {
		const { rows } = await pool.query('SELECT * FROM news_images ORDER BY display_order ASC, id ASC');
		return rows;
	},
	async createMany(items) {
		if (!Array.isArray(items) || items.length === 0) return [];
		const values = [];
		const params = [];
		items.forEach((it, idx) => {
			const offset = idx * 4;
			params.push(it.news_id, it.image_url, it.caption ?? null, it.display_order ?? 0);
			values.push(`($${offset + 1}, $${offset + 2}, $${offset + 3}, $${offset + 4})`);
		});
		const sql = `INSERT INTO news_images (news_id, image_url, caption, display_order) VALUES ${values.join(', ')} RETURNING *`;
		const { rows } = await pool.query(sql, params);
		return rows;
	},
	async findByNewsId(newsId) {
		const { rows } = await pool.query('SELECT * FROM news_images WHERE news_id = $1 ORDER BY display_order ASC, id ASC', [newsId]);
		return rows;
	},
	async findById(id) {
		const { rows } = await pool.query('SELECT * FROM news_images WHERE id = $1', [id]);
		return rows[0] || null;
	},
	async create(data) {
		const { news_id, image_url, caption = null, display_order = 0 } = data;
		const { rows } = await pool.query(
			'INSERT INTO news_images (news_id, image_url, caption, display_order) VALUES ($1,$2,$3,$4) RETURNING *',
			[news_id, image_url, caption, display_order]
		);
		return rows[0];
	},
	async update(id, data) {
		const { news_id, image_url, caption, display_order } = data;
		const { rows } = await pool.query(
			'UPDATE news_images SET news_id=$1, image_url=$2, caption=$3, display_order=$4 WHERE id=$5 RETURNING *',
			[news_id, image_url, caption, display_order, id]
		);
		return rows[0];
	},
	async remove(id) {
		const { rows } = await pool.query('DELETE FROM news_images WHERE id=$1 RETURNING id', [id]);
		return rows[0];
	},
	async removeByNewsId(newsId) {
		await pool.query('DELETE FROM news_images WHERE news_id=$1', [newsId]);
		return { news_id: newsId };
	},
};


