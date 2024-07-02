import { Controller, Get } from '@nestjs/common';

@Controller('alumnos')
export class AlumnosController {
    @Get()
    helloworld() {
        return 'Hello World';
    }
}
