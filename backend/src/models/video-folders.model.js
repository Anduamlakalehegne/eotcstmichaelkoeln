import { pool } from '../config/db.js';

export const VideoFoldersModel = {
	async findAll() {
		const { rows } = await pool.query('SELECT * FROM video_folders ORDER BY display_order ASC, id ASC');
		return rows;
	},
	async findById(id) {
		const { rows } = await pool.query('SELECT * FROM video_folders WHERE id = $1', [id]);
		return rows[0] || null;
	},
	async create(data) {
		const { name, description = null, display_order = 0 } = data;
		const { rows } = await pool.query(
			'INSERT INTO video_folders (name, description, display_order) VALUES ($1,$2,$3) RETURNING *',
			[name, description, display_order]
		);
		return rows[0];
	},
	async update(id, data) {
		const { name, description, display_order } = data;
		const { rows } = await pool.query(
			'UPDATE video_folders SET name=$1, description=$2, display_order=$3 WHERE id=$4 RETURNING *',
			[name, description, display_order, id]
		);
		return rows[0];
	},
	async remove(id) {
		const { rows } = await pool.query('DELETE FROM video_folders WHERE id=$1 RETURNING id', [id]);
		return rows[0];
	},
};


