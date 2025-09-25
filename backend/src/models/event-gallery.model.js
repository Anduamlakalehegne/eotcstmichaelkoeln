import { pool } from '../config/db.js';

export const EventGalleryModel = {
	async findAll() {
		const { rows } = await pool.query('SELECT * FROM event_gallery ORDER BY display_order ASC, id ASC');
		return rows;
	},
	async findById(id) {
		const { rows } = await pool.query('SELECT * FROM event_gallery WHERE id = $1', [id]);
		return rows[0] || null;
	},
	async create(data) {
		const { event_id, image_url, caption = null, display_order = 0 } = data;
		const { rows } = await pool.query('INSERT INTO event_gallery (event_id, image_url, caption, display_order) VALUES ($1,$2,$3,$4) RETURNING *', [event_id, image_url, caption, display_order]);
		return rows[0];
	},
	async update(id, data) {
		const { event_id, image_url, caption, display_order } = data;
		const { rows } = await pool.query('UPDATE event_gallery SET event_id=$1, image_url=$2, caption=$3, display_order=$4 WHERE id=$5 RETURNING *', [event_id, image_url, caption, display_order, id]);
		return rows[0];
	},
	async remove(id) {
		const { rows } = await pool.query('DELETE FROM event_gallery WHERE id=$1 RETURNING id', [id]);
		return rows[0];
	},
};


