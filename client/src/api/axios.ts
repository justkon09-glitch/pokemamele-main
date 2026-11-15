import axios from 'axios';

const apiClient = axios.create({
  // Ajusta el puerto o prefijo global (ej. /api) según tu main.ts en NestJS
  baseURL: 'http://localhost:3000', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;