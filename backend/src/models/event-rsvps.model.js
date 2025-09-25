import { pool } from '../config/db.js';

export const EventRsvpsModel = {
	async findAll() {
		const { rows } = await pool.query('SELECT * FROM event_rsvps ORDER BY id DESC');
		return rows;
	},
	async findById(id) {
		const { rows } = await pool.query('SELECT * FROM event_rsvps WHERE id = $1', [id]);
		return rows[0] || null;
	},
	async create(data) {
		const { event_id, name, email, phone = null, guests = 1, message = null } = data;
		const { rows } = await pool.query('INSERT INTO event_rsvps (event_id, name, email, phone, guests, message) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *', [event_id, name, email, phone, guests, message]);
		return rows[0];
	},
	async update(id, data) {
		const { event_id, name, email, phone, guests, message } = data;
		const { rows } = await pool.query('UPDATE event_rsvps SET event_id=$1, name=$2, email=$3, phone=$4, guests=$5, message=$6 WHERE id=$7 RETURNING *', [event_id, name, email, phone, guests, message, id]);
		return rows[0];
	},
	async remove(id) {
		const { rows } = await pool.query('DELETE FROM event_rsvps WHERE id=$1 RETURNING id', [id]);
		return rows[0];
	},
};


