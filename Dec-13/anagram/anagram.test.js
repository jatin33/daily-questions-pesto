import { isAnagram } from './anagram';

describe('check if given strings are anagrams of each other', () => {
  it('should throw errors if either of strings are empty', () => {
    expect(() => { isAnagram('', ''); }).toThrow('Inputs passed cannot be empty strings!');
    expect(() => { isAnagram('hello', ''); }).toThrow('Inputs passed cannot be empty strings!');
    expect(() => { isAnagram('', 'act'); }).toThrow('Inputs passed cannot be empty strings!');
  });
  it('should return correct output', () => {
    expect(isAnagram('act', 'tac')).toBe(true);
    expect(isAnagram('Listen', 'Silent')).toBe(true);
    expect(isAnagram('The eyes', 'They see')).toBe(true);
    expect(isAnagram('tiss', 'hiss')).toBe(false);
  });
});
