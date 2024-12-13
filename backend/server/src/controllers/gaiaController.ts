// server/src/controllers/gaiaController.ts
import { Request, Response } from 'express';
import { queryGaiaLLM, generateImage, transcribeAudio } from '../services/gaianetService';

export const queryLLMHandler = async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
    const result = await queryGaiaLLM(prompt);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to query LLM' });
  }
};

export const generateImageHandler = async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
    const result = await generateImage(prompt);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate image' });
  }
};

export const transcribeAudioHandler = async (req: Request, res: Response) => {
  try {
    const audioFile = req.file;
    const result = await transcribeAudio(audioFile);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to transcribe audio' });
  }
};
