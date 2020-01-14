/**
 * @param {number} n
 * @return {boolean}
 */
const hasAlternatingBits = (n) => {
  const binary = n.toString(2);
  for (let i = 1; i < binary.length; i += 1) {
    if (binary[i - 1] === binary[i]) {
      return false;
    }
  }
  return true;
};

export default hasAlternatingBits;
