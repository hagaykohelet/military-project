import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { Roles } from 'src/auth/roles/role.decorator';
import { Role } from 'src/auth/roles/role.enum';
import { RolesGurds } from 'src/auth/roles/roles.guards';
import { AuthGuard } from 'src/auth/auth.guard';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Roles(Role.COMMANDER)
  @UseGuards(RolesGurds)
  @UseGuards(AuthGuard)
  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':name')
  async findone(@Param('name') username: string) {
    return await this.usersService.getOne(username);
  }

  @Post()
  create(@Body(ValidationPipe) user: User): Promise<User> {
    return this.usersService.addSolider(user);
  }
  // @Delete(':id')
  // deleteOne(@Param('id') id: number) {
  //   return this.usersService.delete(id);
  // }
}
