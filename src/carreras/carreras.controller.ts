import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CarrerasService } from './carreras.service';
import { CrearCarreraDto } from './dto/crear-carrera.dto';
import { ActualizarCarreraDto } from './dto/actualizar-carrera.dto';

@Controller('carreras')
export class CarrerasController {
    constructor(private carrerasService: CarrerasService) {}

    @Get()
    obtenerCarreras(@Query() query: any) {
        console.log(query);
        return this.carrerasService.obtenerCarreras();
    }

    @Get('/:id')
    obtenerCarrera(@Param('id') id: string) {
        return this.carrerasService.obtenerCarrera(parseInt(id));
    }

    @Post()
    crearCarrera(@Body() carrera: CrearCarreraDto) {
        return this.carrerasService.crearCarrera(carrera);
    }

    @Put()
    actualizarCarrera(@Body() carrera: ActualizarCarreraDto) {
        return this.carrerasService.actualizarCarrera(carrera);
    }

    @Patch()
    actualizarClaveCarrera() {
        return this.carrerasService.actualizarClaveCarrera();
    }

    @Delete()
    eliminarCarrera() {
        return this.carrerasService.eliminarCarrera();
    }
}
