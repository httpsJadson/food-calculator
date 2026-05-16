import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEmpty, IsNotEmpty, IsString } from "class-validator";

export class LoginDto {

  @ApiProperty({ description: 'User email' })
  @IsEmail()  
  @IsEmail()  
  email: string;

  @ApiProperty({ description: 'User password' })
  @IsString()
  @IsNotEmpty()
  password: string;

}