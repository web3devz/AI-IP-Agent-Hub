# AI-IP Agent Hub

## Overview
The **AI-IP Agent Hub** is a decentralized platform designed for IP asset management, AI task automation, and inter-agent payments. It integrates **Nevermined SDK**, **Story SDK**, and **GaiaNet Public Nodes** to create a seamless ecosystem for managing intellectual property (IP) assets, automating AI tasks, and facilitating inter-agent payments on the blockchain.

## What Is This Project?

The **AI-IP Agent Hub** serves as a decentralized infrastructure that connects AI models, asset owners, and agents. The platform allows developers to register, license, and monetize AI datasets while enabling payments and service execution through an automated and trustless blockchain-based ecosystem.


## How It Works

### **1. Asset Registration**
- **Register IP Assets:** Use **Story SDK** to register datasets, models, and services as blockchain-backed NFTs.
- **Decentralized Metadata:** Metadata is stored on **IPFS**, ensuring tamper-proof and decentralized records.

### **2. AI Task Creation**
- **Task Automation:** Use **Nevermined SDK** to create and track AI tasks.
- **Agent Services:** Agents register services, which are discoverable by requesters.

### **3. Inter-Agent Payments**
- **Payment Automation:** **Nevermined SDK** automates payments, ensuring credits are only transferred after successful task completion.
- **Smart Contract Execution:** Payments are processed using blockchain-based smart contracts.

### **4. AI Service Execution**
- **Model Queries:** Use **GaiaNet Public Nodes** for LLMs, text-to-image, and audio-to-text models.
- **Task Results:** AI tasks are executed through GaiaNet APIs, returning the processed results to requesters.


## Why Is It Needed?

1. **Decentralized Trust:** Eliminates reliance on centralized services.
2. **Secure Transactions:** Automates payments using smart contracts.
3. **Transparent IP Licensing:** Ensures transparent licensing and ownership of digital assets.
4. **Scalability:** Supports dynamic AI services and agent management.
5. **Data Integrity:** Leverages **IPFS** to ensure secure and tamper-proof metadata storage.


## How the Project Fits Both Bounty Criteria

### **Bounty 1: Use of Nevermined Payments & Agent Management**

1. **Payments Integration:**
   - **Nevermined SDK** automates inter-agent payments.
   - Credits are locked until the task's success is confirmed.

2. **Agent Service Management:**
   - Agents register and expose endpoints for task management.

3. **Automated Payments:**
   - Inter-agent payments occur automatically based on pre-defined conditions.

4. **Implemented APIs:**
   - **Asset Management API:** Register assets using **Story SDK**.
   - **Task Management API:** Create and manage tasks using **Nevermined SDK**.

### **Bounty 2: Use of Story SDK for Asset Management**

1. **IP Asset Registration:**
   - Datasets, models, and assets are registered as NFTs using **Story SDK**.

2. **Licensing & Royalties:**
   - Licensing modules ensure proper royalty payments.

3. **Asset Tokenization:**
   - Assets are tokenized, ensuring decentralized ownership tracking.


## How GaiaNet Is Used

1. **AI Models:**
   - **LLM API:** Text generation using **Llama 8b** models.
   - **Whisper API:** Speech-to-text transcription.
   - **Text-to-Image API:** Generate images using Stable Diffusion models.

2. **Task Automation:**
   - Tasks are processed through **GaiaNet APIs**, returning task results seamlessly.

3. **Unique Implementation:**
   - Supports multiple AI models and automates task assignment.
   - Reduces the need for deploying custom AI infrastructure.


## Key Features

### **AI Asset Management**
- **Asset Registration:** IP datasets and models are registered as blockchain-backed NFTs.
- **IP Licensing:** Smart contract-based licensing automates royalty management.
- **Decentralized Storage:** Files and metadata are stored securely on **IPFS**.

### **AI Task Automation**
- **Task Management:** Use **Nevermined SDK** for creating, tracking, and managing AI tasks.
- **Agent Discovery:** Agents register and expose endpoints for task processing.
- **Payment Automation:** Payments occur upon task completion.

### **Inter-Agent Payments**
- **Automated Payments:** Payments and royalties are distributed securely using blockchain smart contracts.
- **Credits Management:** AI agents pay for task processing through **Nevermined SDK**'s payment module.

### **AI Service Integration**
- **LLM Queries:** Use **GaiaNet APIs** for natural language processing and text generation.
- **Speech-to-Text:** Convert audio to text using **Whisper API**.
- **Image Generation:** Create AI-generated images using **Text-to-Image API**.


## Technologies Used

- **React.js & TypeScript:** Frontend development.
- **Nevermined SDK:** Payments and agent service management.
- **Story SDK:** IP asset registration and licensing.
- **GaiaNet Public APIs:** AI model services.
- **IPFS:** Decentralized file storage.
- **Smart Contracts:** Blockchain-based royalty and payment distribution.


## API Endpoints Implemented

1. **Asset Registration Endpoint:**
   ```http
   POST /api/assets/register
   Body: {
     "title": "Asset Title",
     "description": "Asset Description"
   }
   ```

2. **Task Creation Endpoint:**
   ```http
   POST /api/tasks/create
   Body: {
     "agentDid": "did:example:123",
     "query": "Process dataset"
   }
   ```

3. **GaiaNet Service Queries:**
   - **LLM API:** `https://llama8b.gaia.domains/v1/chat/completions`
   - **Text-to-Image API:** `https://portrait.gaia.domains/v1/images/generate`


## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.


## Acknowledgments

- **Nevermined.io:** Payments & Task Automation
- **Story SDK:** IP Asset Management
- **GaiaNet Public Nodes:** AI Model Integration

## Contact
- **Project Maintainer:** Rukmani
- **GitHub Repository:** [AI-IP-Agent-Hub]([https://github.com/your-repo/AI-IP-Agent-Hub](https://github.com/web3devz/AI-IP-Agent-Hub))

Happy Coding! 🚀
