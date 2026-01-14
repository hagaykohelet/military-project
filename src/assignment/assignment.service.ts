import { Injectable } from '@nestjs/common';
import { Assignment } from './entities/assignment.entity';
import { InjectModel } from '@nestjs/sequelize';
import { CreateAssignmentDto } from './dto/create-assignment.dto';

@Injectable()
export class AssignmentService {
  private assignment: CreateAssignmentDto[] = [];
  constructor(
    @InjectModel(Assignment)
    private assingmentModel: typeof Assignment,
  ) {}

  async getAll(): Promise<Assignment[]> {
    return this.assingmentModel.findAll();
  }

  async createAssinment(assignment: Assignment): Promise<Assignment> {
    return await this.assingmentModel.create({
      userid: assignment.userId,
      shiftId: assignment.shiftId,
    });
  }
}
