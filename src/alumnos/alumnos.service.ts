import { Injectable, NotFoundException } from '@nestjs/common';
import { Alumno } from './alumno.entity';
import { v4 } from 'uuid';
import { ActualizarAlumnoDTO, CrearAlumnoDTO } from './dto/alumno.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AlumnoInterface } from './interfaces/alumno.interface';

@Injectable()
export class AlumnosService {
    constructor(@InjectModel('Alumno') private readonly alumnoModel: Model<AlumnoInterface>) {}

    async obtenerAlumnos(): Promise<AlumnoInterface[]> {
        const alumnos = await this.alumnoModel.find();

        return alumnos;
    }

    async obtenerAlumno(id: string): Promise<AlumnoInterface> {
        const alumno = await this.alumnoModel.findById(id);

        return alumno;
    }

    async crearAlumno(nuevoAlumno: CrearAlumnoDTO): Promise<AlumnoInterface> {
        const alumno = new this.alumnoModel(nuevoAlumno);

        return await alumno.save();
    }

    async actualizarAlumno(id: string, camposActualizados: ActualizarAlumnoDTO): Promise<AlumnoInterface> {
        const alumnoActualizado = await this.alumnoModel.findByIdAndUpdate(id, camposActualizados, { new: true });

        return alumnoActualizado;
    }

    async eliminarAlumno(id: string): Promise<AlumnoInterface> {
        const alumnoEliminado = await this.alumnoModel.findByIdAndDelete(id);

        return alumnoEliminado;
    }
}
