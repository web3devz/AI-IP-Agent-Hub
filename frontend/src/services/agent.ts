// src/services/agent.ts
import { Payments, Endpoint } from '@nevermined-io/payments';

const payments = new Payments({
  returnUrl: "http://localhost:3000",
  environment: "staging",
});

export const createAgentService = async (planDID: string) => {
  try {
    const agentEndpoints: Endpoint[] = [
      { POST: "http://localhost:5000/api/v1/agents/(.*)/tasks" },
      { GET: "http://localhost:5000/api/v1/agents/(.*)/tasks/(.*)" },
    ];

    const agentDID = await payments.createService({
      planDID,
      name: "AI Agent Service",
      description: "Runs AI tasks using payment credits.",
      serviceType: "agent",
      serviceChargeType: "fixed",
      authType: "bearer",
      token: "changeme",
      amountOfCredits: 1,
      endpoints: agentEndpoints,
      openEndpoints: ["http://localhost:5000/api/v1/rest/docs-json"],
    });

    console.log("Agent Service Created:", agentDID);
    return agentDID;
  } catch (error) {
    console.error("Error creating agent service:", error);
    throw error;
  }
};
