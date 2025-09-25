import { pool } from '../config/db.js';

export const ArchiveModel = {
	async findAll() {
		const { rows } = await pool.query('SELECT * FROM archive ORDER BY year DESC, id DESC');
		return rows;
	},
	async findById(id) {
		const { rows } = await pool.query('SELECT * FROM archive WHERE id = $1', [id]);
		return rows[0] || null;
	},
	async create(data) {
		const { title, description = null, year, type, category, image_url = null, document_url = null, tags = null } = data;
		const { rows } = await pool.query(
			`INSERT INTO archive (title, description, year, type, category, image_url, document_url, tags)
			 VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,
			[title, description, year, type, category, image_url, document_url, tags]
		);
		return rows[0];
	},
	async update(id, data) {
		const { title, description, year, type, category, image_url, document_url, tags } = data;
		const { rows } = await pool.query(
			`UPDATE archive SET title=$1, description=$2, year=$3, type=$4, category=$5, image_url=$6, document_url=$7, tags=$8, updated_at=NOW()
			 WHERE id=$9 RETURNING *`,
			[title, description, year, type, category, image_url, document_url, tags, id]
		);
		return rows[0];
	},
	async remove(id) {
		const { rows } = await pool.query('DELETE FROM archive WHERE id=$1 RETURNING id', [id]);
		return rows[0];
	},
};


