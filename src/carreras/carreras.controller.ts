import { Controller, Get } from '@nestjs/common';

@Controller({})
export class CarrerasController {
    @Get('/carreras')
    obtenerCarreras() {
        return 'Obteniendo todas las carreras';
    }
}
