import { Finder } from "./Finder"
import { UserRepository } from "./UserRepository"
import { User } from "./User"

export class SpecificFinder extends Finder {
  public constructor(repository: UserRepository) {
    super(repository)
  }

  public findUnique(query: string): Set<User> {
    return new Set(this.find(query))
  }
}
