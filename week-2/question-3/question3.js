/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const transpose = function (A) {
  const rows = A.length;
  const columns = A[0].length;
  if (rows === columns) {
    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < A[i].length; j++) {
        if (i < j) {
          const temp = A[i][j];
          A[i][j] = A[j][i];
          A[j][i] = temp;
        }
      }
    }
    return A;
  }
  const result = [];
  for (let k = 0; k < columns; k++) {
    const row = [];
    for (let m = 0; m < rows; m++) {
      row.push(A[m][k]);
    }
    result.push(row);
  }
  return result;
};

export default transpose;
