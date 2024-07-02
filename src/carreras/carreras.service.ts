import { Injectable, NotFoundException } from '@nestjs/common';
import { CrearCarreraDto } from './dto/crear-carrera.dto';
import { ActualizarCarreraDto } from './dto/actualizar-carrera.dto';

export interface Carrera {
    clave: string;
    nombre: string;
}

@Injectable()
export class CarrerasService {
    private carreras = [];

    obtenerCarreras() {
        return this.carreras;
    }

    obtenerCarrera(id: number) {
        const carrera = this.carreras.find(carrera => carrera.id === id);

        if (!carrera) {
            return new NotFoundException(`No se encontró la carrera con el id ${id}`);
        }

        return carrera;
    }

    crearCarrera(carrera: CrearCarreraDto) {
        this.carreras.push({
            ...carrera,
            id: this.carreras.length + 1
        });

        return carrera;
    }

    actualizarCarrera(carrera: ActualizarCarreraDto) {
        return 'Actualizando carreras';
    }

    actualizarClaveCarrera() {
        return 'Actualizando la clave de una carrera';
    }

    eliminarCarrera() {
        return 'Eliminando carreras';
    }
}
