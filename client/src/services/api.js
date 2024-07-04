import axios from 'axios';

const API_URL = 'http://localhost:3000/rest-api';

export const obtenerAlumnos = () => {
    return axios.get(`${API_URL}/alumnos`);
};

export const obtenerAlumno = (id) => {
    return axios.get(`${API_URL}/alumnos/${id}`);
};

export const crearAlumno = (alumno) => {
    return axios.post(`${API_URL}/alumnos`, alumno);
};

export const actualizarAlumno = (id, alumno) => {
    return axios.patch(`${API_URL}/alumnos/${id}`, alumno);
};
  
export const eliminarAlumno = (id) => {
    return axios.delete(`${API_URL}/alumnos/${id}`);
};