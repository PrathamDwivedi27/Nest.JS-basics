import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [{ username: 'Amon', email: 'amon@gmail.com' }];
  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userData: CreateUserType) {
    this.fakeUsers.push(userData);
    return userData;
  }
}
