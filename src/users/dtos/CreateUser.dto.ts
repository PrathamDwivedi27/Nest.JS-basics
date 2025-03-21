import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserType {
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
