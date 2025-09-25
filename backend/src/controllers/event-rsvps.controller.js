import { EventRsvpsModel } from '../models/event-rsvps.model.js';
import { asyncHandler } from '../middlewares/asyncHandler.js';

export const getAll = asyncHandler(async (_req, res) => {
	const items = await EventRsvpsModel.findAll();
	res.json(items);
});

export const getOne = asyncHandler(async (req, res) => {
	const item = await EventRsvpsModel.findById(Number(req.params.id));
	if (!item) return res.status(404).json({ error: 'Not found' });
	res.json(item);
});

export const createOne = asyncHandler(async (req, res) => {
	const created = await EventRsvpsModel.create(req.body);
	res.status(201).json(created);
});

export const updateOne = asyncHandler(async (req, res) => {
	const updated = await EventRsvpsModel.update(Number(req.params.id), req.body);
	if (!updated) return res.status(404).json({ error: 'Not found' });
	res.json(updated);
});

export const deleteOne = asyncHandler(async (req, res) => {
	const removed = await EventRsvpsModel.remove(Number(req.params.id));
	if (!removed) return res.status(404).json({ error: 'Not found' });
	res.json({ id: removed.id });
});


