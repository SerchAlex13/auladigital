import { Injectable } from '@nestjs/common';
import { Alumno, EstatusAlumno } from './alumno.entity';
import { v4 } from 'uuid';

@Injectable()
export class AlumnosService {
    private alumnos: Alumno[] = [
        {
            id: '1',
            nombre: 'Sergio Alejandro',
            apellido_paterno: 'Rosales',
            apellido_materno: 'Mejía',
            estatus: EstatusAlumno.ACTIVO,
        },
    ]
    
    obtenerAlumnos() {
        return this.alumnos;
    }

    crearAlumno(nombre: string, apellido_paterno: string, apellido_materno: string) {
        const alumno: Alumno = {
            id: v4(),
            nombre: nombre,
            apellido_paterno: apellido_paterno,
            apellido_materno: apellido_materno,
            estatus: EstatusAlumno.ACTIVO,
        }

        this.alumnos.push(alumno);

        return alumno;
    }

    actualizarAlumno() {
        
    }

    eliminarAlumno() {
        
    }
}
