/* eslint-disable no-var */
/* eslint-disable no-param-reassign */

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i += 1) {
    const currentValue = array[i];
    // eslint-disable-next-line vars-on-top
    for (var j = i - 1; j >= 0 && array[j] > currentValue; j -= 1) {
      array[j + 1] = array[j];
    }
    // eslint-disable-next-line block-scoped-var
    array[j + 1] = currentValue;
  }
  return array;
};

export default insertionSort;
