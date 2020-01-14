/**
 * @param {number} N
 * @return {number}
 */
const complement = (binary) => {
  let complementString = '';
  for (let i = 0; i < binary.length; i += 1) {
    if (binary[i] === '0') {
      complementString += '1';
    } else {
      complementString += '0';
    }
  }
  return complementString;
};

const bitwiseComplement = (N) => {
  const binary = N.toString(2);
  return parseInt(complement(binary), 2);
};

export default bitwiseComplement;
