/**
 * @param {number[]} A
 * @return {number[]}
 */
const isEven = (number) => number % 2 === 0;
const isOdd = (number) => number % 2 === 1;

const sortArrayByParityII = function (A) {
  const evens = A.filter(isEven);
  const odds = A.filter(isOdd);
  for (let i = 0, j = 0, k = 0; i < A.length; i++) {
    if (isEven(i)) {
      A[i] = evens[j];
      j += 1;
    } else {
      A[i] = odds[k];
      k += 1;
    }
  }
  return A;
};

export default sortArrayByParityII;
