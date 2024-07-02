import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class IndexController {
    @Get('/')
    index(@Req() request: Request, @Res() response: Response) {
        return response.status(200).json({
            message: 'Hello World'
        });
    }
}
