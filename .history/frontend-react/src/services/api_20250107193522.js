import axios from 'axios';

// L'API Gateway tourne probablement sur le port 3000
const API_URL = 'http://localhost:3000';

export const signupUser = (payload) => {
  return axios.post(`${API_URL}/auth/signup`, payload);
};

export const loginUser = (payload) => {
  return axios.post(`${API_URL}/auth/login`, payload);
};

// On peut rajouter d'autres fonctions (courses, payments, etc.)
