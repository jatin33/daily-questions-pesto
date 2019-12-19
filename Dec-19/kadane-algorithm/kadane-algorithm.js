const getMaximum = (array) => array.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, array[0]);

const containsOnlyNumbers = (array) => array
  .filter((element) => typeof element === 'number').length === array.length;

const maximumSubarraySum = (array) => {
  if (array.length === 0) {
    return -1;
  }
  if (!containsOnlyNumbers(array)) {
    throw new Error('Array should only contain number!');
  }
  const localSums = [];
  for (let i = 0; i < array.length; i++) {
    let localSum = 0;
    localSum += array[i];
    localSums.push(localSum);
    for (let j = i + 1; j < array.length; j++) {
      localSum += array[j];
      localSums.push(localSum);
    }
  }
  return getMaximum(localSums);
};

export {
  maximumSubarraySum,
};
