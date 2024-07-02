import { Injectable } from '@nestjs/common';
import { Alumno, EstatusAlumno } from './alumno.entity';
import { v4 } from 'uuid';
import { ActualizarAlumnoDTO } from './dto/alumno.dto';

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

    actualizarAlumno(id: string, camposActualizados: ActualizarAlumnoDTO): Alumno {
        const alumno = this.buscarAlumnoPorId(id);
        const alumnoActualizado = Object.assign(alumno, camposActualizados);

        this.alumnos = this.alumnos.map(alumno => alumno.id === id ? alumnoActualizado : alumno);

        return alumnoActualizado;
    }

    buscarAlumnoPorId(id: string): Alumno {
        return this.alumnos.find(alumno => alumno.id === id);
    }

    eliminarAlumno(id: string) {
        this.alumnos = this.alumnos.filter(alumno => alumno.id !== id);
    }
}
