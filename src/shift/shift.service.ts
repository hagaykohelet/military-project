import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Shift } from './entities/shift.entity';

@Injectable()
export class ShiftService {
  constructor(
    @InjectModel(Shift)
    private shiftModel: typeof Shift,
  ) {}
  async findAll(): Promise<Shift[] | string> {
    const shifts = await this.shiftModel.findAll();
    if (shifts.length === 0) {
      return 'have not shifts yet';
    }
    return shifts;
  }

  async addShift(shift: Shift): Promise<Shift> {
    return await this.shiftModel.create({
      startTime: shift.startTime,
      endTime: shift.endTime,
      location: shift.location,
    });
  }

  async deleteShift(id: number): Promise<any> {
    const shift = await this.shiftModel.destroy({ where: { id: id } });
    if (shift === 0) {
      return 'not found';
    }
    return 'deleted successfully';
  }
}
