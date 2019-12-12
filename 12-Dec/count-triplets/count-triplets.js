const hasNegatives = (list) => list.filter((number) => number < 0).length > 0;
const hasZero = (list) => list.filter((number) => number === 0).length > 0;
const hasDuplicates = (list) => [...new Set(list)].length !== list.length;
const hasOnlyNumericValues = (list) => list.filter((element) => typeof element === 'number').length === list.length;

const countTriplets = (list) => {
  if (!Array.isArray(list)) {
    throw new Error('Input should only be of type array');
  }
  if (list.length === 0) {
    return -1;
  }
  if (hasNegatives(list)) {
    throw new Error('Array should only consist of positive integers');
  }
  if (hasZero(list)) {
    throw new Error('Array should not contain 0');
  }
  if (hasDuplicates(list)) {
    throw new Error('Array should only contain unique values');
  }
  if (!hasOnlyNumericValues(list)) {
    throw new Error('Array should only contain numeric values');
  }

  let tripletOccurance = 0;
  for (let i = 0; i < list.length; i++) {
    let sum = 0;
    for (let j = i + 1; j < list.length; j++) {
      sum = list[i] + list[j];
      if (list.includes(sum)) {
        tripletOccurance += 1;
      }
    }
  }
  return tripletOccurance > 0 ? tripletOccurance : -1;
};


export {
  countTriplets,
};
