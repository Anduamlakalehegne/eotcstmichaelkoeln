import { Router } from 'express';
import { getAll, getOne, createOne, updateOne, deleteOne, getByNews, createMany, deleteByNews } from '../controllers/news-images.controller.js';

const router = Router();

router.get('/', getAll);
router.get('/:id', getOne);
router.get('/by-news/:newsId', getByNews);
router.post('/', createOne);
router.post('/bulk', createMany);
router.put('/:id', updateOne);
router.delete('/:id', deleteOne);
router.delete('/by-news/:newsId', deleteByNews);

export default router;


