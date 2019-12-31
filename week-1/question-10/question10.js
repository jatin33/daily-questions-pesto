/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

const isSelfDividing = (number) => {
  if (String(number).includes('0')) {
    return false;
  }
  const numberOfDigits = String(number).length;
  const digits = [];
  let tempNumber = number;
  while (tempNumber > 0) {
    digits.push(tempNumber % 10);
    tempNumber = Math.floor(tempNumber / 10);
  }
  const selfDividingDigits = digits.reduce((acc, curr) => {
    if (number % curr === 0) {
      acc += 1;
    }
    return acc;
  }, 0);
  return selfDividingDigits === numberOfDigits;
};

const selfDividingNumbers = function (left, right) {
  const selfdividingNumbers = [];
  for (let i = left; i <= right; i++) {
    if (isSelfDividing(i)) {
      selfdividingNumbers.push(i);
    }
  }
  return selfdividingNumbers;
};

export default selfDividingNumbers;
