import { longestString } from '../src';

describe('longestString()', () => {
  it('returns expected string', () => {
    const expectedString = 'The Odd Life of Timothy Green Book of Life of Brian';
    expect(longestString('list.txt')).toEqual(expectedString);
  });
});
