// server/src/services/gaianetService.ts
export const generateImage = async (prompt: string) => {
    const response = await fetch(`https://portrait.gaia.domains/v1/images/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'portrait', prompt }),
    });
    return await response.json();
  };
  
  export const transcribeAudio = async (audioFile: File) => {
    const formData = new FormData();
    formData.append('audio', audioFile);
  
    const response = await fetch(`https://whisper.gaia.domains/v1/audio/transcriptions`, {
      method: 'POST',
      body: formData,
    });
    return await response.json();
  };
  