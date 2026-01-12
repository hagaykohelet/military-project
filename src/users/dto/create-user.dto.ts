import { IsString, IsInt, IsEnum, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsString()
  password: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEnum(['commander', 'solider'], { message: 'this role not valid' })
  @IsNotEmpty()
  role: 'commander' | 'solider';
}
