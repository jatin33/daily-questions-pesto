/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
const isOdd = (number) => number % 2 === 1;

const oddCells = function (n, m, indices) {
  const zeroedArray = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < m; j++) {
      row.push(0);
    }
    zeroedArray.push(row);
  }

  for (let x = 0; x < indices.length; x++) {
    const row = indices[x][0];
    const column = indices[x][1];
    for (let y = 0; y < zeroedArray[row].length; y++) {
      zeroedArray[row][y] += 1;
    }
    for (let z = 0; z < zeroedArray.length; z++) {
      zeroedArray[z][column] += 1;
    }
  }

  let oddsInMatrix = 0;
  for (let p = 0; p < n; p++) {
    for (let q = 0; q < m; q++) {
      if (isOdd(zeroedArray[p][q])) {
        oddsInMatrix += 1;
      }
    }
  }
  return oddsInMatrix;
};

export default oddCells;
