/**
 * @param {number[]} A
 * @return {number}
 */
const peakIndexInMountainArray = function (A) {
  for (let i = 1; i < A.length; i++) {
    if (A[i - 1] > A[i]) {
      return i - 1;
    }
  }
};

export default peakIndexInMountainArray;
