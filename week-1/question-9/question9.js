/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function (nums) {
  const allIntegers = [...nums];
  allIntegers.sort((a, b) => a - b);
  const maxSum = 0;
  const pairs = [];
  while (allIntegers.length) {
    pairs.push(allIntegers.splice(0, 2));
  }
  return pairs.reduce((acc, curr) => {
    acc += Math.min(curr[0], curr[1]);
    return acc;
  }, maxSum);
};

export default arrayPairSum;
