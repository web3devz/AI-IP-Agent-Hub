// server/src/routes/gaiaRoutes.ts
import { Router } from 'express';
import { queryLLMHandler, generateImageHandler, transcribeAudioHandler } from '../controllers/gaiaController';

const router = Router();

router.post('/llm', queryLLMHandler);
router.post('/image', generateImageHandler);
router.post('/audio', transcribeAudioHandler);

export default router;
