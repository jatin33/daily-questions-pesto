/**
 * @param {number[]} nums
 * @return {number}
 */
// eslint-disable-next-line no-bitwise
const singleNumber = (nums) => nums.reduce((acc, curr) => acc ^ curr, 0);

export default singleNumber;
