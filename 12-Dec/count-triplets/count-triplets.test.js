import { countTriplets } from './count-triplets';

describe('count triplets', () => {
  it('should throw error if input passed is not of type array', () => {
    const stringType = '123';
    expect(() => { countTriplets(stringType); }).toThrow('Input should only be of type array');
  });

  it('should return -1 if array is empty', () => {
    expect(countTriplets([])).toBe(-1);
  });

  it('should throw error if array contains negative or zero', () => {
    expect(() => { countTriplets([-1, 2, 3, 1]); }).toThrow('Array should only consist of positive integers');
    expect(() => { countTriplets([0, 2, 3, 1]); }).toThrow('Array should not contain 0');
  });

  it('should throw error if array contains duplicates', () => {
    expect(() => { countTriplets([1, 2, 3, 3, 6]); }).toThrow('Array should only contain unique values');
  });

  it('should throw error if array contains non-integer data', () => {
    expect(() => { countTriplets([1, 2, '3', 3, 6, [1, 2]]); }).toThrow('Array should only contain numeric values');
  });

  it('should return correct output', () => {
    expect(countTriplets([1, 2, 3, 4, 5])).toBe(4);
    expect(countTriplets([1, 5, 3, 2])).toBe(2);
    expect(countTriplets([1, 2, 3])).toBe(1);
    expect(countTriplets([1, 4, 6])).toBe(-1);
  });
});
