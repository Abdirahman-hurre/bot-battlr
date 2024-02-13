// src/services/api.js

const BASE_URL = 'http://localhost:8001';

const api = {
    getBots: async () => {
        const response = await fetch(`${BASE_URL}/bots`);
        return response.json();
    },
    deleteBot: async (botId) => {
        await fetch(`${BASE_URL}/bots/${botId}`, { method: 'DELETE' });
    },
};

export default api;
