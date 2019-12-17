const compare = (element1, element2, comparator) => {
  if (comparator) {
    return comparator(element1, element2);
  }
  if (element1 === element2) {
    return 0;
  }
  return element1 > element2 ? 1 : -1;
};

function binarySearch(sortedArray, key, comparator) {
  if (sortedArray.length === 0) {
    return -1;
  }
  let lowerBound = 0;
  let upperBound = sortedArray.length - 1;
  while (lowerBound <= upperBound) {
    const midIndex = Math.floor((lowerBound + upperBound) / 2);
    const comparisonValue = compare(key, sortedArray[midIndex], comparator);
    if (comparisonValue === 0) {
      return midIndex;
    } if (comparisonValue > 0) {
      lowerBound = midIndex + 1;
    } else if (comparisonValue < 0) {
      upperBound = midIndex - 1;
    }
  }
  return -1;
}

export {
  binarySearch,
};
