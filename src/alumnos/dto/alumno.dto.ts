import { EstatusAlumno } from "../alumno.entity"

export class CrearAlumnoDTO {
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    estatus: EstatusAlumno;
}

export class ActualizarAlumnoDTO {
    nombre?: string;
    apellido_paterno?: string;
    apellido_materno?: string;
    estatus?: EstatusAlumno;
}