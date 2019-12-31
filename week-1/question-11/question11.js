/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function (arr) {
  const valueFrequency = {};
  for (let i = 0; i < arr.length; i++) {
    if (valueFrequency[arr[i]]) {
      valueFrequency[arr[i]] += 1;
    } else {
      valueFrequency[arr[i]] = 1;
    }
  }
  return Object.values(valueFrequency).length === new Set([...Object.values(valueFrequency)]).size;
};

export default uniqueOccurrences;
