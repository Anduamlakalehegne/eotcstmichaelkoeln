import { Router } from 'express';
import newsRouter from './news.routes.js';
import eventsRouter from './events.routes.js';
import archiveRouter from './archive.routes.js';
import galleryRouter from './gallery.routes.js';
import videosRouter from './videos.routes.js';
import blogRouter from './blog.routes.js';
import announcementsRouter from './announcements.routes.js';
import tagsRouter from './tags.routes.js';
import churchCalendarsRouter from './church-calendars.routes.js';
import galleryFoldersRouter from './gallery-folders.routes.js';
import videoFoldersRouter from './video-folders.routes.js';
import newsImagesRouter from './news-images.routes.js';
import newsTagsRouter from './news-tags.routes.js';
import eventGalleryRouter from './event-gallery.routes.js';
import eventRsvpsRouter from './event-rsvps.routes.js';
import relatedEventsRouter from './related-events.routes.js';
import relatedNewsRouter from './related-news.routes.js';
import authRouter from './auth.routes.js';

const router = Router();

router.use('/news', newsRouter);
router.use('/events', eventsRouter);
router.use('/archive', archiveRouter);
router.use('/gallery', galleryRouter);
router.use('/videos', videosRouter);
router.use('/blog', blogRouter);
router.use('/announcements', announcementsRouter);
router.use('/tags', tagsRouter);
router.use('/church-calendars', churchCalendarsRouter);
router.use('/gallery-folders', galleryFoldersRouter);
router.use('/video-folders', videoFoldersRouter);
router.use('/news-images', newsImagesRouter);
router.use('/news-tags', newsTagsRouter);
router.use('/event-gallery', eventGalleryRouter);
router.use('/event-rsvps', eventRsvpsRouter);
router.use('/related-events', relatedEventsRouter);
router.use('/related-news', relatedNewsRouter);
router.use('/auth', authRouter);

export default router;


