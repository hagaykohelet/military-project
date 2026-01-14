import { Controller, Get, Post, Body } from '@nestjs/common';
import { AssignmentService } from './assignment.service';
import { Assignment } from './entities/assignment.entity';

@Controller('assignment')
export class AssignmentController {
  constructor(private readonly assignmentService: AssignmentService) {}

  @Post()
  create(@Body() assignment: Assignment): Promise<Assignment> {
    return this.assignmentService.createAssinment(assignment);
  }

  @Get()
  findAll() {
    return this.assignmentService.getAll();
  }
}
