/**
 * @param {number[]} chips
 * @return {number}
 */
const isEven = (number) => number % 2 === 0;
const minCostToMoveChips = function (chips) {
  const evens = chips.filter(isEven).length;
  return Math.min(evens, chips.length - evens);
};

export default minCostToMoveChips;
