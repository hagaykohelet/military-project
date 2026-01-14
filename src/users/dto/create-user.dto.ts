import { IsString, IsEnum, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsEnum(['commander', 'solider'], { message: 'this role not valid' })
  @IsNotEmpty()
  role: 'commander' | 'solider';
}
