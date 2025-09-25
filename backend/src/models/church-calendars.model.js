import { pool } from '../config/db.js';

export const ChurchCalendarsModel = {
	async findAll() {
		const { rows } = await pool.query('SELECT * FROM church_calendars ORDER BY year DESC');
		return rows;
	},
	async findById(id) {
		const { rows } = await pool.query('SELECT * FROM church_calendars WHERE id = $1', [id]);
		return rows[0] || null;
	},
	async create(data) {
		const { year, title, file_path, file_name, file_size, mime_type, is_active = true } = data;
		const { rows } = await pool.query(
			`INSERT INTO church_calendars (year, title, file_path, file_name, file_size, mime_type, is_active)
			 VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`,
			[year, title, file_path, file_name, file_size, mime_type, is_active]
		);
		return rows[0];
	},
	async update(id, data) {
		const { year, title, file_path, file_name, file_size, mime_type, is_active } = data;
		const { rows } = await pool.query(
			`UPDATE church_calendars SET year=$1, title=$2, file_path=$3, file_name=$4, file_size=$5, mime_type=$6, is_active=$7, updated_at=NOW() WHERE id=$8 RETURNING *`,
			[year, title, file_path, file_name, file_size, mime_type, is_active, id]
		);
		return rows[0];
	},
	async remove(id) {
		const { rows } = await pool.query('DELETE FROM church_calendars WHERE id=$1 RETURNING id', [id]);
		return rows[0];
	},
};


