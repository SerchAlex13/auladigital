import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { CrearAlumnoDTO } from './dto/alumno.dto';

@Controller('alumnos')
export class AlumnosController {
    constructor(private alumnosService: AlumnosService) {}

    @Get()
    obtenerAlumnos() {
        return this.alumnosService.obtenerAlumnos();
    }

    @Post()
    crearAlumno(@Body() nuevoAlumno: CrearAlumnoDTO) {
        return this.alumnosService.crearAlumno(
            nuevoAlumno.nombre,
            nuevoAlumno.apellido_paterno,
            nuevoAlumno.apellido_materno
        );
    }

    @Delete(':id')
    eliminarAlumno(@Param('id') id: string) {
        this.alumnosService.eliminarAlumno(id);
    }
}
