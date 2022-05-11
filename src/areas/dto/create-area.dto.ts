import { IsString, IsNotEmpty, IsNumber, MinLength } from 'class-validator';

export class CreateAreaDto {
  @IsString({ message: 'Se esperaba una cadena de texto para el título.' })
  @MinLength(3, { message: 'El título es muy corto.' })
  @IsNotEmpty({ message: 'El título no puede quedar vacío.' })
  readonly name: string;

  @IsString({ message: 'Se esperaba una cadena de texto para la descripción.' })
  @MinLength(3, { message: 'La descripción es muy corta.' })
  @IsNotEmpty({ message: 'La descripción no puede quedar vacía.' })
  readonly description: string;

  @IsString({ message: 'Se esperaba una cadena de texto para la imagen.' })
  @IsNotEmpty({ message: 'La imagen no puede quedar vacía.' })
  readonly image: string;

  @IsNumber({}, { message: 'Se esperaba dato númerico para la latitud.' })
  @IsNotEmpty({ message: 'La latitud no puede quedar vacía.' })
  readonly lat!: number;

  @IsNumber({}, { message: 'Se esperaba dato númerico para la longitud.' })
  @IsNotEmpty({ message: 'La longitud no puede quedar vacía.' })
  readonly lng!: number;

  @IsString()
  @MinLength(3, { message: 'La dirección es muy corta.' })
  readonly address: string;

  readonly visibility: number;

  readonly creator: number;

  readonly distance: number;

  readonly mine: boolean;
}
