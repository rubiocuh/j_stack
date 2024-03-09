
export class CreateUserDto {
  firstName: string;
  lastName: string;
  emailPrimary: string;
  emailSecondary: string;
  phoneHome: string;
  phoneMobile: string;
  isActive: boolean;
  signUpDate: Date;
  lastLoginDate: Date;
}
