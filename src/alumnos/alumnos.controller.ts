import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AlumnosService } from './alumnos.service';
import { ActualizarAlumnoDTO, CrearAlumnoDTO } from './dto/alumno.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('alumnos')
@ApiTags('alumnos')
export class AlumnosController {
    constructor(private alumnosService: AlumnosService) {}

    @Get()
    @ApiOperation({summary: 'Lista a todos los alumnos'})
    @ApiResponse({status: 200, description: 'Retorna a todos los alumnos.'})
    @ApiResponse({status: 403, description: 'Forbidden.'})
    obtenerAlumnos() {
        return this.alumnosService.obtenerAlumnos();
    }

    @Get('/:id')
    obtenerAlumno(@Param('id') id: string) {
        return this.alumnosService.obtenerAlumno(id);
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
