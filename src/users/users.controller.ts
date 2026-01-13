import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
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
  findAll(): CreateUserDto[] {
    return this.usersService.getAll();
  }

  @Get(':id')
  findone(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getOne(id);
  }

  @Post()
  create(@Body(ValidationPipe) CreateUserDto: CreateUserDto) {
    return this.usersService.addSolider(CreateUserDto);
  }
  @Delete(':id')
  deleteOne(@Param('id') id: number) {
    return this.usersService.delete(id);
  }
}
