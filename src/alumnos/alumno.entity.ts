enum EstatusAlumno {
    ACTIVO = 'ACTIVO',
    INACTIVO = 'INACTIVO',
}

export class Alumno {
    id: number
    nombre: string
    apellido_paterno: string
    apellido_materno: string
    estatus: EstatusAlumno
}
