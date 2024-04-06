

import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDTO {
  @ApiProperty()
  @IsEmail({}, { message: 'Please enter a valid email address' })
  @IsNotEmpty({ message: 'Email should not be empty' })
  email: string;

  @ApiProperty()
  @IsString({ message: 'Please enter a valid first name' })
  @IsNotEmpty({ message: 'First name should not be empty' })
  firstName: string;

  @ApiProperty()
  @IsString({ message: 'Please enter a valid last name' })
  @IsNotEmpty({ message: 'Last name should not be empty' })
  lastName: string;

  @ApiProperty()
  @IsString({ message: 'Please enter a valid password' })
  @MinLength(6, { message: 'Password should be at least 6 characters long' })
  password: string;
}