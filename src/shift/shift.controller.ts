import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ShiftService } from './shift.service';
import { Shift } from './entities/shift.entity';

@Controller('shift')
export class ShiftController {
  constructor(private readonly shiftService: ShiftService) {}

  @Post()
  create(@Body() shift: Shift): Promise<Shift> {
    return this.shiftService.addShift(shift);
  }

  @Get()
  findAll() {
    return this.shiftService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shiftService.deleteShift(+id);
  }
}
