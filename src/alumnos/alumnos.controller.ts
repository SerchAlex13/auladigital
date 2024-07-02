import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { ActualizarAlumnoDTO, CrearAlumnoDTO } from './dto/alumno.dto';

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

    @Patch(':id')
    actualizarAlumnos(@Param('id') id: string, @Body() camposActualizados: ActualizarAlumnoDTO) {
        return this.alumnosService.actualizarAlumno(id, camposActualizados);
    }

    @Delete(':id')
    eliminarAlumno(@Param('id') id: string) {
        this.alumnosService.eliminarAlumno(id);
    }
}
