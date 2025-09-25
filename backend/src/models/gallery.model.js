import { pool } from '../config/db.js';

export const GalleryModel = {
	async findAll() {
		const { rows } = await pool.query('SELECT * FROM gallery ORDER BY display_order ASC, id ASC');
		return rows;
	},
	async findById(id) {
		const { rows } = await pool.query('SELECT * FROM gallery WHERE id = $1', [id]);
		return rows[0] || null;
	},
	async create(data) {
		const { title, description = null, image_url, category = null, folder_id = null, display_order = 0 } = data;
		const { rows } = await pool.query(
			`INSERT INTO gallery (title, description, image_url, category, folder_id, display_order)
			 VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
			[title, description, image_url, category, folder_id, display_order]
		);
		return rows[0];
	},
	async update(id, data) {
		const { title, description, image_url, category, folder_id, display_order } = data;
		const { rows } = await pool.query(
			`UPDATE gallery SET title=$1, description=$2, image_url=$3, category=$4, folder_id=$5, display_order=$6, updated_at=NOW()
			 WHERE id=$7 RETURNING *`,
			[title, description, image_url, category, folder_id, display_order, id]
		);
		return rows[0];
	},
	async remove(id) {
		const { rows } = await pool.query('DELETE FROM gallery WHERE id=$1 RETURNING id', [id]);
		return rows[0];
	},
};


