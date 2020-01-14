/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = (nums1, nums2) => {
  const loopDuration = nums2.length;
  const nextGreaterElements = nums1.map((element) => {
    for (let i = nums2.indexOf(element); i < loopDuration; i++) {
      if (nums2[i] > element) {
        return nums2[i];
      }
    }
    return -1;
  });
  return nextGreaterElements;
};

export default nextGreaterElement;
