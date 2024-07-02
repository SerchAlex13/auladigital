import { IsString, MinLength } from 'class-validator';

export class CrearCarreraDto {
    @IsString()
    @MinLength(1)
    clave: string;

    @IsString()
    @MinLength(1)
    nombre: string;
}