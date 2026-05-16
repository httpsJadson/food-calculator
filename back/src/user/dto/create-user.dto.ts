import { JobRole } from "src/common/enums/jobRole.enum";
import { IsNotEmpty, IsString, IsEmail, IsStrongPassword, IsEnum } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
 
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ 
    description: 'The username of the user.', 
    example: 'johndoe', 
  })
  username: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ 
    description: 'The email address of the user.', 
    example: 'johndoe@example.com', 
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  @ApiProperty({ 
    description: 'The password of the user.', 
    example: 'SecurePass123!', 
  })
  password: string;

  @IsNotEmpty()
  @IsEnum(JobRole)
  @ApiProperty({ 
    description: 'The job role of the user.', 
    example: JobRole.ADMIN, 
    enum: JobRole,
  })
  jobRole: JobRole;
}
