import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Shift } from 'src/shift/entities/shift.entity';
import { User } from 'src/users/entities/user.entity';
@Table
export class Assignment extends Model {
  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Shift)
  @Column
  shiftId: number;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Shift)
  shift: Shift;
}
