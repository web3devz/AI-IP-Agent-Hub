// server/src/controllers/assetController.ts
import { Request, Response } from 'express';
import { registerAsset } from '../services/storySdkService';

export const registerAssetHandler = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const ipId = await registerAsset(title, description);
    res.status(200).json({ ipId });
  } catch (err) {
    res.status(500).json({ error: 'Failed to register asset' });
  }
};
