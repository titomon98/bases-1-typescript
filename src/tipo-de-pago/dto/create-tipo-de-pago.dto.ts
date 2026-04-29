import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateTipoDePagoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  tipo: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  proveedor?: string;

  @IsBoolean()
  @IsOptional()
  es_predeterminado?: boolean;
}