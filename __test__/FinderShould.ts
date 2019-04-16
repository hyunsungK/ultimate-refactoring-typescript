import { UserRepository } from "../src/dependencyChange/UserRepository";
import { Finder } from "../src/dependencyChange/Finder";
import { SpecificFinder } from "../src/dependencyChange/SpecificFinder";

describe('Finder', () => {
  it('finds users by querying profile', () => {
    const repository = new UserRepository();
    const finder = new Finder(repository);

    expect(finder.find('programmer')).toHaveLength(1);
  });
  it('gets users with empty profile', () => {
    const repository = new UserRepository();
    const finder = new Finder(repository);

    expect(finder.find('')).toHaveLength(1);
  });
  it('avoids duplicates', () => {
    const repository = new UserRepository();
    const finder = new SpecificFinder(repository);

    expect(finder.findUnique('').size).toEqual(1);
  });
});
