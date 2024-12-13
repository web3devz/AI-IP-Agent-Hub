// src/services/payments.ts
import { Payments } from '@nevermined-io/payments';

const payments = new Payments({
  returnUrl: "http://localhost:3000",
  environment: "staging",
});

export const createPaymentPlan = async () => {
  try {
    const planDID = await payments.createCreditsPlan({
      name: "AI Payments Plan",
      description: "AI Service Plan",
      price: 10000000n,
      tokenAddress: "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d",
      amountOfCredits: 30,
      tags: ["ai", "service"],
    });
    return planDID;
  } catch (error) {
    console.error("Error creating payment plan:", error);
    throw error;
  }
};

export const createAgentService = async (planDID: string) => {
  try {
    const agentDID = await payments.createService({
      planDID,
      name: "AI Agent",
      description: "Agent Service for Tasks",
      serviceType: "agent",
      serviceChargeType: "fixed",
      authType: "bearer",
      token: "changeme",
      amountOfCredits: 1,
      endpoints: [{ POST:"http://localhost:5000/agent" }],
    });
    return agentDID;
  } catch (error) {
    console.error("Error creating agent service:", error);
    throw error;
  }
};