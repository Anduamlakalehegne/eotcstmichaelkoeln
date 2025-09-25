import { pool } from '../config/db.js';

export const RelatedEventsModel = {
	async findAll() {
		const { rows } = await pool.query('SELECT * FROM related_events ORDER BY id ASC');
		return rows;
	},
	async findById(id) {
		const { rows } = await pool.query('SELECT * FROM related_events WHERE id = $1', [id]);
		return rows[0] || null;
	},
	async create(data) {
		const { event_id, related_event_id } = data;
		const { rows } = await pool.query('INSERT INTO related_events (event_id, related_event_id) VALUES ($1,$2) RETURNING *', [event_id, related_event_id]);
		return rows[0];
	},
	async update(id, data) {
		const { event_id, related_event_id } = data;
		const { rows } = await pool.query('UPDATE related_events SET event_id=$1, related_event_id=$2 WHERE id=$3 RETURNING *', [event_id, related_event_id, id]);
		return rows[0];
	},
	async remove(id) {
		const { rows } = await pool.query('DELETE FROM related_events WHERE id=$1 RETURNING id', [id]);
		return rows[0];
	},
};


