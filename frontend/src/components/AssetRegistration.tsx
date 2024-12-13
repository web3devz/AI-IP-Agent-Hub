import React, { useState } from 'react';
import { registerAsset } from '../services/api';

const AssetRegistration: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [response, setResponse] = useState('');

  const handleRegister = async () => {
    try {
      const result = await registerAsset({ title, description });
      setResponse(result.ipId);
    } catch (error) {
      setResponse('Error registering asset');
    }
  };

  return (
    <div>
      <h2>Register IP Asset</h2>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      {response && <p>Response: {response}</p>}
    </div>
  );
};

export default AssetRegistration;
