import { reverseInGroups } from './reverseArrayInGroups';

describe('reverse array in groups', () => {
  it('throw error if input parameters are empty', () => {
    expect(() => { reverseInGroups([1, 2, 3]); }).toThrow('Array and groupsize required as input!');
    expect(() => { reverseInGroups(3); }).toThrow('Array and groupsize required as input!');
  });
  it('should return -1 if empty array passed as input', () => {
    expect(reverseInGroups([], 3)).toBe(-1);
  });
  it('should return correct output', () => {
    expect(reverseInGroups([1, 2, 3, 4, 5, 6], 2)).toEqual([2, 1, 4, 3, 6, 5]);
    expect(reverseInGroups([1, 2, 3, 4, 5, 6], 3)).toEqual([3, 2, 1, 6, 5, 4]);
    expect(reverseInGroups([1, 2, 3, 4, 5], 4)).toEqual([4, 3, 2, 1, 5]);
    expect(reverseInGroups([{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }], 3))
      .toEqual([{ c: 3 }, { b: 2 }, { a: 1 }, { d: 4 }]);
  });
});
