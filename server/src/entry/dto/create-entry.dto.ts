import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateEntryDto {
  @IsNotEmpty()
  @IsString()
  appName: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  emailOrUsername: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;
}
