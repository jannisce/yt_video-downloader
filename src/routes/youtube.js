import express from 'express';
import { downloadYouTubeVideo } from '../controllers/youtubeController.js';

const router = express.Router();

router.get('/', downloadYouTubeVideo);

export default router;
