/**
 * @param {number[]} candies
 * @return {number}
 */
const distributeCandies = (candies) => Math.min(new Set(candies).size, candies.length / 2);

export default distributeCandies;
