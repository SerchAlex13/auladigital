import { Schema } from 'mongoose'

export const AlumnoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido_paterno: {
        type: String,
        required: true
    },
    apellido_materno: {
        type: String,
        required: true
    },
    // estatus: {
    //     type: String,
    //     default: 'ACTIVO'
    // }
});