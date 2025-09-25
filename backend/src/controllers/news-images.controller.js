import { NewsImagesModel } from '../models/news-images.model.js';
import { asyncHandler } from '../middlewares/asyncHandler.js';

export const getAll = asyncHandler(async (_req, res) => {
	const items = await NewsImagesModel.findAll();
	res.json(items);
});

export const getOne = asyncHandler(async (req, res) => {
	const item = await NewsImagesModel.findById(Number(req.params.id));
	if (!item) return res.status(404).json({ error: 'Not found' });
	res.json(item);
});

export const getByNews = asyncHandler(async (req, res) => {
	const items = await NewsImagesModel.findByNewsId(Number(req.params.newsId));
	res.json(items);
});

export const createOne = asyncHandler(async (req, res) => {
	const created = await NewsImagesModel.create(req.body);
	res.status(201).json(created);
});

export const createMany = asyncHandler(async (req, res) => {
	const { images } = req.body || {};
	const created = await NewsImagesModel.createMany(images || []);
	res.status(201).json(created);
});

export const updateOne = asyncHandler(async (req, res) => {
	const updated = await NewsImagesModel.update(Number(req.params.id), req.body);
	if (!updated) return res.status(404).json({ error: 'Not found' });
	res.json(updated);
});

export const deleteOne = asyncHandler(async (req, res) => {
	const removed = await NewsImagesModel.remove(Number(req.params.id));
	if (!removed) return res.status(404).json({ error: 'Not found' });
	res.json({ id: removed.id });
});

export const deleteByNews = asyncHandler(async (req, res) => {
	const result = await NewsImagesModel.removeByNewsId(Number(req.params.newsId));
	res.json(result);
});


