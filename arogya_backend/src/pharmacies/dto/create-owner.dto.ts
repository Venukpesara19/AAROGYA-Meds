import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsPhoneNumber, IsInt } from 'class-validator';

export class CreatePharmacyOwnerDto {
  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  first_name: string;

  @IsNotEmpty()
  @ApiProperty()
  @IsString()
  last_name: string;

}
