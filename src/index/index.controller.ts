import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class IndexController {
    @Get('/')
    index(@Req() request: Request, @Res() response: Response) {
        return response.status(200).json({
            message: 'Hello World'
        });
    }

    @Get('new')
    @HttpCode(201)
    somethingNew() {
        return 'Something new';
    }

    @Get('notfound')
    @HttpCode(404)
    notFoundPage() {
        return '404 not found';
    }

    @Get('error')
    @HttpCode(500)
    errorPage() {
        return 'Error Route';
    }

    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number) {
        return num * 2;
    }

    @Get('estatus-alumno/:estatus')
    @UseGuards(AuthGuard)
    esAlumnoActivo(@Param('estatus', ParseBoolPipe) estatus: boolean) {
        return estatus;
    }

    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateUserPipe) query: {name: string, age: number}) {
        return `Hola ${query.name}, tienes ${query.age + 13} años`;
    }
}
