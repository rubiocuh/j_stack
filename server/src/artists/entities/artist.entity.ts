import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Artist extends Model<Artist> {
  @Column
  name: string;
  @Column
  startDate: Date;
}
