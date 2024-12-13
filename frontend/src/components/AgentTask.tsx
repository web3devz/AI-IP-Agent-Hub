import React, { useState } from 'react';
import { createAgentTask } from '../services/api';

const AgentTask: React.FC = () => {
  const [agentDid, setAgentDid] = useState('');
  const [query, setQuery] = useState('');
  const [taskId, setTaskId] = useState('');

  const handleTaskCreation = async () => {
    try {
      const result = await createAgentTask(agentDid, query);
      setTaskId(result.taskId);
    } catch (error) {
      setTaskId('Error creating task');
    }
  };

  return (
    <div>
      <h2>Create Agent Task</h2>
      <input
        placeholder="Agent DID"
        value={agentDid}
        onChange={(e) => setAgentDid(e.target.value)}
      />
      <textarea
        placeholder="Query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleTaskCreation}>Create Task</button>
      {taskId && <p>Task ID: {taskId}</p>}
    </div>
  );
};

export default AgentTask;
