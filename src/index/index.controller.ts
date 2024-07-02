import { Controller, Get, HttpCode, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

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
}
