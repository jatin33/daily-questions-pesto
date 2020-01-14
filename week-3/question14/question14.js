/* eslint-disable no-plusplus */
/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = (grid) => {
  let perimeter = 0;
  const rows = grid.length;
  for (let i = 0; i < rows; i++) {
    const columns = grid[i].length;
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] === 1) {
        // up
        if (i === 0) {
          perimeter += 1;
        } else if (grid[i - 1][j] === 0) {
          perimeter += 1;
        }

        // down
        if (i === rows - 1) {
          perimeter += 1;
        } else if (grid[i + 1][j] === 0) {
          perimeter += 1;
        }

        // left
        if (j === 0) {
          perimeter += 1;
        } else if (grid[i][j - 1] === 0) {
          perimeter += 1;
        }

        // right
        if (j === columns - 1) {
          perimeter += 1;
        } else if (grid[i][j + 1] === 0) {
          perimeter += 1;
        }
      }
    }
  }
  return perimeter;
};

export default islandPerimeter;
