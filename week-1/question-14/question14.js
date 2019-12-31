/**
 * @param {number[]} heights
 * @return {number}
 */
const heightChecker = function (heights) {
  let inversionCount = 0;
  const localHeightsCopy = [...heights];
  localHeightsCopy.sort((a, b) => a - b);
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== localHeightsCopy[i]) {
      inversionCount += 1;
    }
  }
  return inversionCount;
};

export default heightChecker;
