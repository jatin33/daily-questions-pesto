/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = (J, S) => {
  if (J === undefined || S === undefined) {
    throw new Error('Input is empty!');
  }
  let jewelsCount = 0;
  for (let i = 0; i < J.length; i++) {
    for (let j = 0; j < S.length; j++) {
      if (J[i] === S[j]) {
        jewelsCount += 1;
      }
    }
  }
  return jewelsCount;
};

export default numJewelsInStones;
