import React, { useState } from 'react';
import { createPaymentPlan, createAgentService } from '../services/payments';

const PaymentsSetup: React.FC = () => {
  const [planDID, setPlanDID] = useState<string | null>(null);
  const [agentDID, setAgentDID] = useState<string | null>(null);

  const handleCreatePlan = async () => {
    try {
      const newPlanDID = await createPaymentPlan();
      setPlanDID(newPlanDID);
    } catch (error) {
      console.error("Error creating payment plan:", error);
    }
  };

  const handleCreateAgent = async () => {
    if (!planDID) {
      alert("Please create a payment plan first!");
      return;
    }

    try {
      const newAgentDID = await createAgentService(planDID);
      setAgentDID(newAgentDID);
    } catch (error) {
      console.error("Error creating agent:", error);
    }
  };

  return (
    <div>
      <h2>Payments Setup</h2>
      <button onClick={handleCreatePlan}>Create Payment Plan</button>
      {planDID && <p>Plan DID: {planDID}</p>}
      <button onClick={handleCreateAgent}>Create Agent Service</button>
      {agentDID && <p>Agent DID: {agentDID}</p>}
    </div>
  );
};

export default PaymentsSetup;
