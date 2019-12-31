/**
 * @param {number[]} A
 * @return {number[]}
 */
const isOdd = (number) => number % 2 === 1;
const isEven = (number) => number % 2 === 0;

const sortArrayByParity = function (A) {
  const sortedByEvenOdd = [];
  for (let i = 0; i < A.length; i++) {
    if (isEven(A[i])) {
      sortedByEvenOdd.push(A[i]);
    }
  }
  for (let i = 0; i < A.length; i++) {
    if (isOdd(A[i])) {
      sortedByEvenOdd.push(A[i]);
    }
  }
  return sortedByEvenOdd;
};

export default sortArrayByParity;
