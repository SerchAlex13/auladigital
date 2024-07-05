import { Document } from "mongoose";

export interface AlumnoInterface extends Document {
    readonly nombre: string;
    readonly apellido_paterno: string;
    readonly apellido_materno: string;
    // readonly estatus: string;
}