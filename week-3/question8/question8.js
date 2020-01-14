/* eslint-disable no-param-reassign */
/**
 * @param {string} S
 * @return {string}
 */

const toGoatWord = (word, index) => {
  const vowels = 'aeiou';
  const firstLetter = word[0];
  if (vowels.includes(firstLetter.toLowerCase())) {
    word = `${word}ma`;
  } else {
    word = `${word.substring(1) + firstLetter}ma`;
  }
  word += 'a'.repeat(index + 1);
  return word;
};

const toGoatLatin = (S) => {
  const words = S.split(' ');
  return words.map((word, index) => toGoatWord(word, index)).join(' ');
};

export default toGoatLatin;
