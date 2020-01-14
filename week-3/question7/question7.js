/* eslint-disable no-restricted-syntax */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (nums1, nums2) => {
  const common = [];
  const nums1Local = new Set(nums1);
  const nums2Local = new Set(nums2);
  for (const number of nums1Local) {
    if (nums2Local.has(number)) {
      common.push(number);
    }
  }
  return common;
};

export default intersection;
