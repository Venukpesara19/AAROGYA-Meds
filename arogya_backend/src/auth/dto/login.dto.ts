
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDTO {
  @ApiProperty()
  @IsEmail({}, { message: 'Please enter a valid email address' })
  @IsNotEmpty({ message: 'Email should not be empty' })
  email: string;


  @ApiProperty()
  @IsString({ message: 'Please enter a valid password' })
  @IsNotEmpty({ message: 'Password should not be empty' })
  password: string;
}