/* eslint-disable no-restricted-syntax */
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
const uncommonFromSentences = (A, B) => {
  if (A.length === 0) {
    return B.split(' ');
  }
  if (B.length === 0) {
    return A.split(' ');
  }
  const wordFrequency = {};
  const wordsInSentences = [...A.split(' '), ...B.split(' ')];
  for (const word of wordsInSentences) {
    if (wordFrequency[word]) {
      wordFrequency[word] += 1;
    } else {
      wordFrequency[word] = 1;
    }
  }

  const uncommonWords = [];
  for (const [word, frequency] of Object.entries(wordFrequency)) {
    if (frequency === 1) {
      uncommonWords.push(word);
    }
  }
  return uncommonWords;
};

export default uncommonFromSentences;
