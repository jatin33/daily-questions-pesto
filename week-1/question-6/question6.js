/**
 * @param {string} S
 * @return {string}
 */
const hasAdjacentDuplicates = (string) => {
  for (let i = 1; i < string.length; i++) {
    if (string[i - 1] === string[i]) {
      return true;
    }
  }
};

const removeDuplicates = function (S) {
  const stringWithDuplicates = [...S];
  while (hasAdjacentDuplicates(stringWithDuplicates)) {
    for (let i = 1; i < stringWithDuplicates.length; i++) {
      if (stringWithDuplicates[i - 1] === stringWithDuplicates[i]) {
        stringWithDuplicates.splice(i - 1, 2);
      }
    }
  }
  return stringWithDuplicates.join('');
};

export default removeDuplicates;
