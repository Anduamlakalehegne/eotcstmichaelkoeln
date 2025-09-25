import { pool } from '../config/db.js';

export const NewsModel = {
	async findAll() {
		const { rows } = await pool.query('SELECT * FROM news ORDER BY publish_date DESC, id DESC');
		return rows;
	},
	async findById(id) {
		const { rows } = await pool.query('SELECT * FROM news WHERE id = $1', [id]);
		return rows[0] || null;
	},
	async create(data) {
		const { title, excerpt, content, image_url, category, featured = false, author, author_role = null, read_time = null, language = 'en' } = data;
		const { rows } = await pool.query(
			`INSERT INTO news (title, excerpt, content, image_url, category, featured, author, author_role, read_time, language)
			 VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *`,
			[title, excerpt, content, image_url, category, featured, author, author_role, read_time, language]
		);
		return rows[0];
	},
	async update(id, data) {
		const { title, excerpt, content, image_url, category, featured, author, author_role, read_time, language } = data;
		const { rows } = await pool.query(
			`UPDATE news SET title=$1, excerpt=$2, content=$3, image_url=$4, category=$5, featured=$6, author=$7, author_role=$8, read_time=$9, language=$10, updated_at=NOW()
			 WHERE id=$11 RETURNING *`,
			[title, excerpt, content, image_url, category, featured, author, author_role, read_time, language, id]
		);
		return rows[0];
	},
	async remove(id) {
		const { rows } = await pool.query('DELETE FROM news WHERE id=$1 RETURNING id', [id]);
		return rows[0];
	},
};


