/*
Refactoring to pipelines by Martin Fowler:

https://martinfowler.com/articles/refactoring-pipelines.html
*/

export class Author {
  public company: string;
  public twitterHandle: string;

  constructor() {
    // @ts-ignore
    this.company = null; // simulate Java behavior
    // @ts-ignore
    this.twitterHandle = null; // simulate Java behavior
  }

  public static twitterHandles(authors: Author[], company: string): string[] {
    const result: string[] = [];

    for (const a of authors) {
      if (a.company === company) {
        const handle = a.twitterHandle;
        if (handle !== null) {
          result.push(handle);
        }
      }
    }
    return result;
  }
}
