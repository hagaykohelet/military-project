import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { secret } from './secretToken.service';

@Injectable()
export class AutoService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn({ username, pass }): Promise<{ access_token: string }> {
    const user = this.userService.getOne(username);

    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.userId, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
