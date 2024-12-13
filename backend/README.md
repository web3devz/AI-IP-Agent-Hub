# AI-IP Agent Hub Backend

This is the backend API service for **AI-IP Agent Hub**, built with **Node.js**, **Express.js**, and **TypeScript**. It supports IP asset registration, AI agent task creation, and integration with **Nevermined SDK**, **Story SDK**, and **GaiaNet Public Nodes**.


## 📁 Folder Structure
```
server/
├── src/
│   ├── controllers/      # Express route controllers
│   │   ├── assetController.ts
│   │   ├── taskController.ts
│   │   └── gaiaController.ts
│   │
│   ├── routes/            # Express route definitions
│   │   ├── assetRoutes.ts
│   │   ├── taskRoutes.ts
│   │   └── gaiaRoutes.ts
│   │
│   ├── services/          # SDK integrations and logic
│   │   ├── storySdkService.ts
│   │   ├── neverminedSdkService.ts
│   │   └── gaianetService.ts
│   │
│   ├── index.ts           # Server entry point
│   └── tsconfig.json      # TypeScript config file
├── package.json            # Project dependencies
└── README.md               # Documentation
```


## 📌 API Endpoints

### **1. Asset Management API**
- **POST** `/api/assets/register` - Register an IP asset using Story SDK.
#### Request Body:
```json
{
  "title": "Dataset Title",
  "description": "Detailed dataset description."
}
```
#### Response:
```json
{
  "ipId": "did:story:asset-id"
}
```


### **2. Task Management API**
- **POST** `/api/tasks/create` - Create an agent task using Nevermined SDK.
#### Request Body:
```json
{
  "agentDid": "did:nvm:agent-id",
  "query": "Process AI task using this data."
}
```
#### Response:
```json
{
  "taskId": "task-id"
}
```


### **3. GaiaNet API Integration**
#### **LLM Text Generation**
- **POST** `/api/gaia/llm`
#### Request Body:
```json
{
  "prompt": "What is artificial intelligence?"
}
```
#### Response:
```json
{
  "response": "Artificial intelligence is..."
}
```

#### **Image Generation**
- **POST** `/api/gaia/image`
#### Request Body:
```json
{
  "prompt": "A futuristic city at sunset."
}
```
#### Response:
```json
{
  "imageUrl": "https://ipfs.io/ipfs/image-hash"
}
```

#### **Audio Transcription**
- **POST** `/api/gaia/audio`
#### Request:
- Upload an audio file using `multipart/form-data` with the key `audio`.
#### Response:
```json
{
  "transcription": "Hello, this is a test audio transcription."
}
```



## 🛠️ Built With

- **Node.js** - Backend framework
- **Express.js** - API routing
- **TypeScript** - Strongly typed language
- **Nevermined SDK** - Payments & agent management
- **Story SDK** - IP asset registration & management
- **GaiaNet Public API** - AI-powered tasks
- **IPFS** - Decentralized file storage




## 📝 License
This project is licensed under the MIT License.
