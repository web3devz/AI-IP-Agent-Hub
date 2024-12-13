import { Payments } from '@nevermined-io/payments';

const payments = Payments.getInstance({
  nvmApiKey: process.env.NVM_API_KEY || '',
  environment: 'testing',
});

export const createAgentTask = async (agentDid: string, query: string) => {
  const taskResult = await payments.query.createTask(agentDid, {
    query,
    name: 'Agent Task',
    additional_params: [],
  });
  return taskResult.data.task.task_id;
};
