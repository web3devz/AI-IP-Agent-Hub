// src/services/gaianet.ts

const GaiaConfig = {
    LLM: {
      apiUrl: 'https://llama8b.gaia.domains/v1',
      modelName: 'llama',
      apiKey: '' // Leave empty or provide any value
    },
    Whisper: {
      apiUrl: 'https://whisper.gaia.domains/v1',
      modelName: 'whisper',
      apiKey: ''
    },
    TextToImage: {
      apiUrl: 'https://portrait.gaia.domains/v1',
      modelName: 'portrait',
      apiKey: ''
    }
  };
  
  export const queryGaiaLLM = async (prompt: string) => {
    try {
      const response = await fetch(`${GaiaConfig.LLM.apiUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${GaiaConfig.LLM.apiKey}`
        },
        body: JSON.stringify({
          model: GaiaConfig.LLM.modelName,
          messages: [{ role: 'user', content: prompt }]
        })
      });
  
      if (!response.ok) {
        throw new Error(`Error querying GaiaNet: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error querying Gaia LLM:", error);
      throw error;
    }
  };
  
  export const generateImage = async (prompt: string) => {
    try {
      const response = await fetch(`${GaiaConfig.TextToImage.apiUrl}/images/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${GaiaConfig.TextToImage.apiKey}`
        },
        body: JSON.stringify({
          model: GaiaConfig.TextToImage.modelName,
          prompt
        })
      });
  
      if (!response.ok) {
        throw new Error(`Error generating image: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error generating image:", error);
      throw error;
    }
  };
  