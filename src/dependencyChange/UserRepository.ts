import { User } from './User';

export class UserRepository {
  public findAll(): User[] {
    const allUsers: User[] = [];
    allUsers.push(new User());
    return allUsers;
  }
}
