// src/services/api.ts
import axios from 'axios';

export const registerAsset = async (data: { title: string; description: string }) => {
  try {
    const response = await axios.post('/api/assets/register', data);
    return response.data;
  } catch (error) {
    console.error("Error registering asset:", error);
    throw error;
  }
};

export const createAgentTask = async (agentDid: string, query: string) => {
  try {
    const response = await axios.post('/api/tasks/create', { agentDid, query });
    return response.data;
  } catch (error) {
    console.error("Error creating agent task:", error);
    throw error;
  }
};
