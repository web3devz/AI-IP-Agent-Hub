
The **AI-IP Agent Hub** frontend is a React-based web application that interacts with AI models, agents, and blockchain-powered payments using the **Nevermined SDK**, **Story SDK**, and **GaiaNet APIs**. It supports asset registration, agent task management, and payment processing.


## Project Structure
```
AI-IP-Agent-Hub/
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── AssetRegistration.tsx
│   │   ├── AgentTask.tsx
│   │   └── PaymentsSetup.tsx
│   │
│   ├── services/
│   │   ├── payments.ts
│   │   ├── agent.ts
│   │   ├── api.ts
│   │   └── gaianet.ts
│   │
│   ├── App.tsx
│   ├── index.tsx
│   └── style.css
│
├── package.json
└── tsconfig.json
```
## Features
- **Asset Registration:** Register datasets and AI models using IPFS and Story SDK.
- **Task Creation:** Create AI agent tasks using Nevermined SDK.
- **Payment Plans:** Handle inter-agent payments and credit plans.
- **AI Queries:** Interact with public GaiaNet models for AI services (LLM, text-to-image).