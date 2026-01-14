import { Table, Column, Model } from 'sequelize-typescript';
@Table
export class Shift extends Model {
  @Column
  startTime: string;

  @Column
  endTime: string;

  @Column
  location: string;
}
