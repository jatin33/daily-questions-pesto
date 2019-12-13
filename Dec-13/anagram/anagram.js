const isAnagram = (string1, string2) => {
  if (string1.length === 0 || string2.length === 0) {
    throw new Error('Inputs passed cannot be empty strings!');
  }
  if (string1.length !== string2.length) {
    return false;
  }
  const difference = string1.split('').reduce((acc, curr, index) => {
    const tempDifference = curr.charCodeAt() ^ string2[index].charCodeAt();
    acc ^= tempDifference;
    return acc;
  }, 0);
  return difference === 0;
};

export { isAnagram };
