import { IsString, IsNotEmpty, IsNumber, MinLength, NotContains, IsArray } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Se esperaba una cadena de texto para el nombre.' })
  @MinLength(3, { message: 'El nombre es muy corto.' })
  readonly name?: string;

  @IsString({ message: 'Se esperaba una cadena de texto para el email.' })
  @IsNotEmpty({ message: 'El email no puede quedar vacío.' })
  readonly email: string;

  @IsString({ message: 'Se esperaba una cadena de texto para el usuario.' })
  @IsNotEmpty({ message: 'El usuario no puede quedar vacío.' })
  @NotContains('@', { message: 'Introduce el nombre de usuario sin la @.' })
  readonly username: string;

  @IsString({ message: 'Se esperaba una cadena de texto para la contraseña.' })
  password?: string;

  @IsString({ message: 'Se esperaba una cadena de texto para el avatar.' })
  avatar?: string;

  @IsNumber({}, { message: 'Se esperaba dato númerico para la latitud.' })
  @IsNotEmpty({ message: 'La latitud no puede quedar vacía.' })
  readonly lat: number;

  @IsNumber({}, { message: 'Se esperaba dato númerico para la longitud.' })
  @IsNotEmpty({ message: 'La longitud no puede quedar vacía.' })
  readonly lng: number;

  @IsArray()
  readonly guardados: string[];

  @IsNumber({}, { message: 'Se esperaba dato númerico para el contacto de emergencia.' })
  @IsNotEmpty({ message: 'El contacto de emergencia no puede quedar vacío.' })
  readonly sos: number;

  readonly me?: boolean;
}
