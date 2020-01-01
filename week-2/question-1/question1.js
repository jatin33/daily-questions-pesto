/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
const findOcurrences = function (text, first, second) {
  const words = text.split(' ');
  const answer = [];
  for (let i = 2; i < words.length; i++) {
    if (words[i - 2] === first && words[i - 1] === second) {
      answer.push(words[i]);
    }
  }
  return answer;
};

export default findOcurrences;
