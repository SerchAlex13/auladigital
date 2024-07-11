import axios from './axios';
// import { Alumno } from '@/interfaces/Alumno'

export const obtenerAlumnos = async () =>
    await axios.get(`/alumnos`);

export const obtenerAlumno = async (id) =>
    await axios.get(`/alumnos/${id}`);

export const crearAlumno = async (alumno) =>
    await axios.post(`/alumnos`, alumno);

export const actualizarAlumno = async (id, alumno) =>
    await axios.patch(`/alumnos/${id}`, alumno);
  
export const eliminarAlumno = async (id) =>
    await axios.delete(`/alumnos/${id}`);