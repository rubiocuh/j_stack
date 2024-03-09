import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Media extends Model<Media> {
  @Column name: string;
  @Column releaseDate: Date;
}
