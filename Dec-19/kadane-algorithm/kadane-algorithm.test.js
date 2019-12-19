import { maximumSubarraySum } from './kadane-algorithm';

describe('find maximum sum of contiguous subarray', () => {
  it('should throw array if array contains non-numeric value', () => {
    expect(() => { maximumSubarraySum(['a', 'b', 1, 2, 3]); }).toThrow('Array should only contain number!');
  });
  it('should give correct output', () => {
    expect(maximumSubarraySum([])).toBe(-1);
    expect(maximumSubarraySum([1, 2, 3, -2, 5])).toBe(9);
    expect(maximumSubarraySum([-1, -2, -3, -4])).toBe(-1);
    expect(maximumSubarraySum([3, -2, 7, 5])).toBe(13);
    expect(maximumSubarraySum([1, 2, 3, 4, 5])).toBe(15);
    expect(maximumSubarraySum([-5, -7, -2, -1, -3])).toBe(-1);
  });
});
