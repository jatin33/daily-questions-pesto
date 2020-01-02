/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
const allCellsDistOrder = (R, C, r0, c0) => {
  const cells = [];
  const cellDistances = [];
  for (let i = 0; i < R; i += 1) {
    for (let j = 0; j < C; j += 1) {
      cells.push([i, j]);
      cellDistances.push(Math.abs(r0 - i) + Math.abs(c0 - j));
    }
  }

  for (let k = 0; k < cellDistances.length - 1; k += 1) {
    for (let m = 0; m < cellDistances.length - k - 1; m += 1) {
      if (cellDistances[m] > cellDistances[m + 1]) {
        const temp = cellDistances[m];
        cellDistances[m] = cellDistances[m + 1];
        cellDistances[m + 1] = temp;

        const tempCell = cells[m];
        cells[m] = cells[m + 1];
        cells[m + 1] = tempCell;
      }
    }
  }
  return cells;
};

export default allCellsDistOrder;
