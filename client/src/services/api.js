import axios from 'axios';

const API_URL = 'http://localhost:3000/rest-api';

export const getStudents = () => {
  return axios.get(`${API_URL}/alumnos`);
};