/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
const rotate = (array) => [array[array.length - 1], ...array.slice(0, array.length - 1)];

const shiftGrid = (grid, k) => {
//     we shift the each row elements by 1 (rotate array)
//     we shift the each element of first column
  let shifts = k;
  const rows = grid.length;
  while (shifts > 0) {
    //         array rotation by 1
    for (let i = 0; i < rows; i++) {
      grid[i] = rotate(grid[i]);
    }
    // rotate first column
    let firstColumn = [];
    for (let m = 0; m < rows; m++) {
      firstColumn.push(grid[m][0]);
    }
    firstColumn = rotate(firstColumn);
    for (let n = 0; n < rows; n++) {
      grid[n][0] = firstColumn[n];
    }
    shifts -= 1;
  }
  return grid;
//     first column rotation by 1
};

export default shiftGrid;
