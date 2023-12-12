import express from 'express';
import { downloadFacebookVideo } from '../controllers/facebookController.js';

const router = express.Router();

router.get('/', downloadFacebookVideo);

export default router;
