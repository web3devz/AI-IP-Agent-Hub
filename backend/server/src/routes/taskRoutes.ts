// server/src/routes/taskRoutes.ts
import { Router } from 'express';
import { createTaskHandler } from '../controllers/taskController';

const router = Router();

router.post('/create', createTaskHandler);

export default router;
