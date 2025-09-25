import { pool } from '../config/db.js';

export const BlogModel = {
	async findAll() {
		const { rows } = await pool.query('SELECT * FROM blog ORDER BY created_at DESC, id DESC');
		return rows;
	},
	async findById(id) {
		const { rows } = await pool.query('SELECT * FROM blog WHERE id = $1', [id]);
		return rows[0] || null;
	},
	async create(data) {
		const { title, excerpt, content, image_url = null, author, publish_date = null, language = 'en' } = data;
		const { rows } = await pool.query(
			`INSERT INTO blog (title, excerpt, content, image_url, author, publish_date, language)
			 VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`,
			[title, excerpt, content, image_url, author, publish_date, language]
		);
		return rows[0];
	},
	async update(id, data) {
		const { title, excerpt, content, image_url, author, publish_date, language } = data;
		const { rows } = await pool.query(
			`UPDATE blog SET title=$1, excerpt=$2, content=$3, image_url=$4, author=$5, publish_date=$6, language=$7, updated_at=NOW()
			 WHERE id=$8 RETURNING *`,
			[title, excerpt, content, image_url, author, publish_date, language, id]
		);
		return rows[0];
	},
	async remove(id) {
		const { rows } = await pool.query('DELETE FROM blog WHERE id=$1 RETURNING id', [id]);
		return rows[0];
	},
};


