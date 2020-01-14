/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = (nums, r, c) => {
  const rowCount = nums.length;
  const columnCount = nums[0].length;
  if ((rowCount * columnCount) === (r * c)) {
    const elements = nums.reduce((acc, curr) => {
      acc = [...acc, ...curr];
      return acc;
    }, []);
    const transformed = Array(r).fill([]).map((row) => Array(c).fill(0));
    let count = 0;
    for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++, count++) {
        transformed[i][j] = elements[count];
      }
    }
    return transformed;
  }
  return nums;
};

export default matrixReshape;
