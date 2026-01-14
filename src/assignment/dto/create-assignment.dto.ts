import { IsInt } from 'class-validator';
export class CreateAssignmentDto {
  @IsInt()
  userId: number;

  @IsInt()
  ShiftId: number;
}
