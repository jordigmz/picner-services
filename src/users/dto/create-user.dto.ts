import { IsString, IsNotEmpty, IsNumber, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Se esperaba una cadena de texto para el nombre.' })
  @MinLength(3, { message: 'El nombre es muy corto.' })
  readonly name?: string;

  @IsString({ message: 'Se esperaba una cadena de texto para el email.' })
  @IsNotEmpty({ message: 'El email no puede quedar vacío.' })
  readonly email: string;

  @IsString({ message: 'Se esperaba una cadena de texto para la contraseña.' })
  readonly password?: string;

  @IsString({ message: 'Se esperaba una cadena de texto para el avatar.' })
  readonly avatar?: string;

  @IsNumber({}, { message: 'Se esperaba dato númerico para la latitud.' })
  @IsNotEmpty({ message: 'La latitud no puede quedar vacía.' })
  readonly lat: number;

  @IsNumber({}, { message: 'Se esperaba dato númerico para la longitud.' })
  @IsNotEmpty({ message: 'La longitud no puede quedar vacía.' })
  readonly lng: number;

  readonly me?: boolean;
}
