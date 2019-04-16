import { Author } from '../src/pipelines/Author';

describe('Author', () => {
  it('collects twitter handles', () => {
    const author1 = new Author();
    author1.company = 'Target';
    author1.twitterHandle = '@bob';
    const author2 = new Author();
    author2.company = 'Other';
    author2.twitterHandle = '@other';
    const authors: Author[] = [];
    authors.push(author1);
    authors.push(author2);

    expect(Author.twitterHandles(authors, 'Target')).toHaveLength(1);
  });
});
