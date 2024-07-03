import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CarrerasService } from './carreras.service';
import { CrearCarreraDto } from './dto/crear-carrera.dto';
import { ActualizarCarreraDto } from './dto/actualizar-carrera.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('carreras')
export class CarrerasController {
    constructor(private carrerasService: CarrerasService) {}

    @Get()
    @ApiTags('carreras')
    obtenerCarreras(@Query() query: any) {
        console.log(query);
        return this.carrerasService.obtenerCarreras();
    }

    @Get('/:id')
    @ApiTags('carreras')
    obtenerCarrera(@Param('id') id: string) {
        return this.carrerasService.obtenerCarrera(parseInt(id));
    }

    @Post()
    @ApiTags('carreras')
    crearCarrera(@Body() carrera: CrearCarreraDto) {
        return this.carrerasService.crearCarrera(carrera);
    }

    @Put()
    @ApiTags('carreras')
    actualizarCarrera(@Body() carrera: ActualizarCarreraDto) {
        return this.carrerasService.actualizarCarrera(carrera);
    }

    @Patch()
    @ApiTags('carreras')
    actualizarClaveCarrera() {
        return this.carrerasService.actualizarClaveCarrera();
    }

    @Delete()
    @ApiTags('carreras')
    eliminarCarrera() {
        return this.carrerasService.eliminarCarrera();
    }
}
