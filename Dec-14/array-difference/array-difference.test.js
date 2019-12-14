import { arrayDifference } from './array-difference';

describe('Array difference', () => {
  it('should throw error if input not array', () => {
    expect(() => { arrayDifference('1,2', [1, 2, 3]); }).toThrow('Input should only be array');
    expect(() => { arrayDifference('1,2', '1,2,3'); }).toThrow('Input should only be array');
  });
  it('should return -1 if input is empty array', () => {
    expect(arrayDifference([], [1, 2, 3])).toBe(-1);
    expect(arrayDifference([], [])).toBe(-1);
    expect(arrayDifference([1, 2, 3], [])).toBe(-1);
  });
  it('should give correct output', () => {
    expect(arrayDifference([1, 2, 3, 4], [1, 2, 3])).toStrictEqual([4]);
    expect(arrayDifference([1, 2, 3, 4, 6], [1, 2, 3, 7, 8])).toStrictEqual([4, 6, 7, 8]);
  });
});
