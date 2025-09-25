import { pool } from '../config/db.js';

export const EventsModel = {
	async findAll() {
		const { rows } = await pool.query('SELECT * FROM events ORDER BY date ASC, id ASC');
		return rows;
	},
	async findById(id) {
		const { rows } = await pool.query('SELECT * FROM events WHERE id = $1', [id]);
		return rows[0] || null;
	},
	async create(data) {
		const {
			title,
			description,
			date,
			time = null,
			location = null,
			address = null,
			image_url = null,
			category,
			featured = false,
			organizer = null,
			contact = null,
			max_attendees = null,
			language = 'en',
		} = data;

		const { rows } = await pool.query(
			`INSERT INTO events (title, description, date, time, location, address, image_url, category, featured, organizer, contact, max_attendees, language)
			 VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *`,
			[title, description, date, time, location, address, image_url, category, featured, organizer, contact, max_attendees, language]
		);
		return rows[0];
	},
	async update(id, data) {
		const {
			title,
			description,
			date,
			time,
			location,
			address,
			image_url,
			category,
			featured,
			organizer,
			contact,
			max_attendees,
			language,
		} = data;

		const { rows } = await pool.query(
			`UPDATE events SET title=$1, description=$2, date=$3, time=$4, location=$5, address=$6, image_url=$7, category=$8, featured=$9, organizer=$10, contact=$11, max_attendees=$12, language=$13, updated_at=NOW()
			 WHERE id=$14 RETURNING *`,
			[
				title,
				description,
				date,
				time,
				location,
				address,
				image_url,
				category,
				featured,
				organizer,
				contact,
				max_attendees,
				language,
				id,
			]
		);
		return rows[0];
	},
	async remove(id) {
		const { rows } = await pool.query('DELETE FROM events WHERE id=$1 RETURNING id', [id]);
		return rows[0];
	},
};


