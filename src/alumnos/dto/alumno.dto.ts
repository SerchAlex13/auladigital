import { EstatusAlumno } from '../alumno.entity';
import { IsEnum, IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CrearAlumnoDTO {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    apellido_paterno: string;

    @IsString()
    @IsNotEmpty()
    apellido_materno: string;
}

export class ActualizarAlumnoDTO {
    @IsString()
    @IsOptional()
    nombre?: string;

    @IsString()
    @IsOptional()
    apellido_paterno?: string;

    @IsString()
    @IsOptional()
    apellido_materno?: string;

    @IsString()
    @IsEnum(EstatusAlumno)
    @IsOptional()
    estatus?: EstatusAlumno;
}