import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsOptional,
  MinLength,
  MaxLength,
} from 'class-validator';

export class CreateProductDto {
  //No va el id porque lo asgina automaticamente la base de datos
  @IsString()
  @IsNotEmpty() // sobra por las dos condiciones inferiores
  @MinLength(3)
  @MaxLength(80)
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  description?: string;
}
