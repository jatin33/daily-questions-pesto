/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = function (s) {
  let rightCount = 0;
  let leftCount = 0;
  let stringSplits = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'L') {
      leftCount += 1;
    } else if (s[i] === 'R') {
      rightCount += 1;
    }
    if (leftCount === rightCount) {
      leftCount = 0;
      rightCount = 0;
      stringSplits += 1;
    }
  }
  return stringSplits;
};

export default balancedStringSplit;
