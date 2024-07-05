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
    async obtenerAlumnos() {
        const alumnos = await this.alumnosService.obtenerAlumnos();

        return alumnos;
    }

    @Get('/:id')
    async obtenerAlumno(@Param('id') id: string) {
        const alumno = await this.alumnosService.obtenerAlumno(id);

        return alumno;
    }

    @Post()
    async crearAlumno(@Body() nuevoAlumno: CrearAlumnoDTO) {
        const alumno = await this.alumnosService.crearAlumno(nuevoAlumno)

        return alumno;
    }

    @Patch(':id')
    async actualizarAlumnos(@Param('id') id: string, @Body() camposActualizados: ActualizarAlumnoDTO) {
        const alumno = await this.alumnosService.actualizarAlumno(id, camposActualizados);

        return alumno;
    }

    @Delete(':id')
    async eliminarAlumno(@Param('id') id: string) {
        const alumno = await this.alumnosService.eliminarAlumno(id);

        return alumno;
    }
}
