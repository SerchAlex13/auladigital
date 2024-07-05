// import { EstatusAlumno } from '../alumno.entity';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CrearAlumnoDTO {
    @IsString()
    @IsNotEmpty()
    readonly nombre: string;

    @IsString()
    @IsNotEmpty()
    readonly apellido_paterno: string;

    @IsString()
    @IsNotEmpty()
    readonly apellido_materno: string;
}

export class ActualizarAlumnoDTO {
    @IsString()
    @IsOptional()
    readonly nombre?: string;

    @IsString()
    @IsOptional()
    readonly apellido_paterno?: string;

    @IsString()
    @IsOptional()
    readonly apellido_materno?: string;

    // @IsString()
    // @IsEnum(EstatusAlumno)
    // @IsOptional()
    // estatus?: EstatusAlumno;
}