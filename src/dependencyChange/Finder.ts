import { UserRepository } from './UserRepository';
import { User } from './User';

export class Finder {
  private repository: UserRepository;

  public constructor(repository: UserRepository) {
    this.repository = repository;
  }

  public find(query: string): User[] {
    return this.repository
      .findAll()
      .filter(u => !u.profile.length || u.profile.includes(query));
  }
}
