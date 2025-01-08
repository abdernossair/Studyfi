import axios from 'axios';

// L'API Gateway tourne probablement sur le port 3000
const API_URL = 'http://localhost:3000';

// ----- Authentification -----
export const signupUser = (payload) => {
  return axios.post(`${API_URL}/auth/signup`, payload);
};

export const loginUser = (payload) => {
  return axios.post(`${API_URL}/auth/login`, payload);
};

// ----- E-Learning : Cours -----
export const getAllCourses = () => {
  return axios.get(`${API_URL}/courses`);
};

export const getCourseById = (courseId) => {
  return axios.get(`${API_URL}/courses/${courseId}`);
};

// Tu peux aussi ajouter une fonction pour créer un cours, etc.
// export const createCourse = (payload) => {
//   const token = localStorage.getItem('token');
//   return axios.post(`${API_URL}/courses`, payload, {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   });
// };
