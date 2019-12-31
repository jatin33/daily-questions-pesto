/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = function (A) {
  return A.map((number) => number * number).sort((num1, num2) => num1 - num2);
};

export default sortedSquares;
