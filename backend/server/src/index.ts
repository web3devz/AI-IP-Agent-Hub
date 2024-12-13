// server/src/index.ts
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import assetRoutes from './routes/assetRoutes';
import taskRoutes from './routes/taskRoutes';
import gaiaRoutes from './routes/gaiaRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Routes
app.use('/api/assets', assetRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/gaia', gaiaRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
