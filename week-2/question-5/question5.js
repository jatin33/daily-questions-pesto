/**
 * @param {string[]} words
 * @return {string[]}
 */

const isMadeOfRow = (row, word) => {
  let madeOfRow = 0;
  for (let i = 0; i < word.length; i++) {
    if (row.includes(word[i])) {
      madeOfRow += 1;
    }
  }
  return madeOfRow;
};

const isValid = (word) => {
  const topRow = 'qwertyuiop';
  const homeRow = 'asdfghjkl';
  const bottomRow = 'zxcvbnm';
  word = word.toLowerCase();
  if (isMadeOfRow(topRow, word) === word.length) {
    return true;
  } if (isMadeOfRow(homeRow, word) === word.length) {
    return true;
  } if (isMadeOfRow(bottomRow, word) === word.length) {
    return true;
  }
  return false;
};

const findWords = function (words) {
  return words.filter(isValid);
};

export default findWords;
