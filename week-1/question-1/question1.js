/**
 * @param {number[]} nums
 * @return {number}
 */

const areMembersNumeric = (numbers) => numbers.every((number) => typeof number === 'number');

function numberOfDigits(number) {
  let digits = 0;
  while (number > 0) {
    digits += 1;
    number = Math.floor(number / 10);
  }
  return digits;
}

const findNumbers = (nums) => {
  if (!areMembersNumeric(nums)) {
    return -1;
  }
  return nums.reduce((acc, curr) => {
    if (numberOfDigits(curr) % 2 === 0) {
      acc += 1;
    }
    return acc;
  }, 0);
};


export default findNumbers;
