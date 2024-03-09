import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column firstName: string;
  @Column lastName: string;
  @Column emailPrimary: string;
  @Column emailSecondary: string;
  @Column phoneHome: string;
  @Column phoneMobile: string;
  @Column isActive: boolean;
  @Column signUpDate: Date;
  @Column lastLoginDate: Date;
}
