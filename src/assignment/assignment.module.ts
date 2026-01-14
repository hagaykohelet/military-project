import { Module } from '@nestjs/common';
import { AssignmentService } from './assignment.service';
import { AssignmentController } from './assignment.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Assignment } from './entities/assignment.entity';

@Module({
  imports: [SequelizeModule.forFeature([Assignment])],
  controllers: [AssignmentController],
  providers: [AssignmentService],
})
export class AssignmentModule {}
