import { pool } from '../config/db.js';

export const VideosModel = {
	async findAll() {
		const { rows } = await pool.query('SELECT * FROM videos ORDER BY created_at DESC, id DESC');
		return rows;
	},
	async findById(id) {
		const { rows } = await pool.query('SELECT * FROM videos WHERE id = $1', [id]);
		return rows[0] || null;
	},
	async create(data) {
		const { title, description = null, video_url, thumbnail_url = null, category = null, folder_id = null, display_order = 0 } = data;
		const { rows } = await pool.query(
			`INSERT INTO videos (title, description, video_url, thumbnail_url, category, folder_id, display_order )
			 VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`,
			[title, description, video_url, thumbnail_url, category, folder_id, display_order]
		);
		return rows[0];
	},
	async update(id, data) {
		const { title, description, video_url, thumbnail_url, category, folder_id, display_order } = data;
		const { rows } = await pool.query(
			`UPDATE videos SET title=$1, description=$2, video_url=$3, thumbnail_url=$4, category=$5, folder_id=$6, display_order=$7, updated_at=NOW()
			 WHERE id=$9 RETURNING *`,
			[title, description, video_url, thumbnail_url, category, folder_id, display_order, id]
		);
		return rows[0];
	},
	async remove(id) {
		const { rows } = await pool.query('DELETE FROM videos WHERE id=$1 RETURNING id', [id]);
		return rows[0];
	},
};


