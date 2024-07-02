export enum EstatusAlumno {
    ACTIVO = 'ACTIVO',
    INACTIVO = 'INACTIVO',
}

export class Alumno {
    id: string
    nombre: string
    apellido_paterno: string
    apellido_materno: string
    estatus: EstatusAlumno
}
