import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): CreateUserDto[] {
    return this.usersService.getAll();
  }

  @Get(':id')
  findone(@Param('id', ParseIntPipe) username: string) {
    return this.usersService.getOne(username);
  }

  @Post()
  create(@Body(ValidationPipe) CreateUserDto: CreateUserDto) {
    return this.usersService.addSolider(CreateUserDto);
  }

  @Delete(':id')
  deleteOne(@Param('id') username: string) {
    return this.usersService.delete(username);
  }
}
