// server/src/controllers/taskController.ts
import { Request, Response } from 'express';
import { createAgentTask } from '../services/neverminedSdkService';

export const createTaskHandler = async (req: Request, res: Response) => {
  try {
    const { agentDid, query } = req.body;
    const taskId = await createAgentTask(agentDid, query);
    res.status(200).json({ taskId });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create task' });
  }
};
