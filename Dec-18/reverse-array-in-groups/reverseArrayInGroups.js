const reverseInGroups = (array, groupSize) => {
  if (array.length === 0) {
    return -1;
  }
  if (groupSize === undefined || array === undefined) {
    throw new Error('Array and groupsize required as input!');
  }
  const unReversedArray = [...array];
  const groups = [];
  while (unReversedArray.length > 0) {
    groups.push(unReversedArray.splice(0, groupSize));
  }
  const reversedGroups = groups.reduce((acc, curr) => {
    acc.push(curr.reverse());
    return acc;
  }, []);
  const groupWiseReversedArray = reversedGroups.flat();
  return groupWiseReversedArray;
};

export { reverseInGroups };
