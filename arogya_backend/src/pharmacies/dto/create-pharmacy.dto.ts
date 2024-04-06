import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsPhoneNumber,
  IsInt,
  IsDecimal,
  isInt,
} from 'class-validator';

export class CreatePharmacyDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  owner: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  address: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  telephone: string;

  @IsNotEmpty()
  @IsDecimal()
  @ApiProperty()
  lat: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  opensAt: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  closeAt: string;

  @IsNotEmpty()
  @IsDecimal()
  @ApiProperty()
  lng: number;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  ratings: number;
}
