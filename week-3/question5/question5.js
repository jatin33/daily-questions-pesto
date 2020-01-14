/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
const distributeCandies = (candies, num_people) => {
  const candiesPerPerson = Array(num_people).fill(0);
  for (let i = 0, giveAway = 1; candies > 0; i += 1, giveAway += 1) {
    if (i >= num_people) {
      i %= num_people;
    }
    if (candies - giveAway < 0) {
      giveAway = candies;
    }
    candies -= giveAway;
    candiesPerPerson[i] += giveAway;
  }
  return candiesPerPerson;
};

export default distributeCandies;
