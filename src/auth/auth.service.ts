import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AutoService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user: CreateUserDto[] = this.userService.getOne(username);

    if (user[0]?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload: { sub: number; username: string } = {
      sub: user[0].id,
      username: user[0].username,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
