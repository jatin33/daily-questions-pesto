import { getLongestCommonPrefix } from './longestCommonPrefix';

describe('longest common prefix of given strings', () => {
  it('should throw error if empty array passed as input', () => {
    expect(() => { getLongestCommonPrefix([]); }).toThrow('Input cannot be empty array!');
  });
  it('should return correct output', () => {
    expect(getLongestCommonPrefix(['wordless'])).toBe('wordless');
    expect(getLongestCommonPrefix(['geeksforgeeks', 'geeks', 'geek', 'geezer'])).toBe('gee');
    expect(getLongestCommonPrefix(['apple', 'ape', 'april'])).toBe('ap');
    expect(getLongestCommonPrefix(['nap', 'nata', 'nop'])).toBe('n');
    expect(getLongestCommonPrefix(['dap', 'nata', 'nop'])).toBe('');
  });
});
