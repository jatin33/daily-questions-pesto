const arrayDifference = (array1, array2) => {
  if (array1.length === 0 || array2.length === 0) {
    return -1;
  }
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    throw new Error('Input should only be array');
  }
  return array1.concat(array2).filter((item) => !array1.includes(item) || !array2.includes(item));
};

export { arrayDifference };
