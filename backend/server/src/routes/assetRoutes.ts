// server/src/routes/assetRoutes.ts
import { Router } from 'express';
import { registerAssetHandler } from '../controllers/assetController';

const router = Router();

router.post('/register', registerAssetHandler);

export default router;
