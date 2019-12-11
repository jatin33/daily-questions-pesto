
function hammingDistance(string1, string2) {
  if (string1.length !== string2.length) {
    throw new Error('Strings must be of same length');
  }
  const distance = string1.split('').reduce((acc, curr, index) => {
    if (curr !== string2[index]) {
      acc += 1;
    }
    return acc;
  }, 0);
  return distance;
}

export {
  hammingDistance,
};
