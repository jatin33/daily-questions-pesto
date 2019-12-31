/**
 * @param {string} S
 * @return {string}
 */
const trimOuterParenthesis = (validParenthesis) => validParenthesis
  .substring(1, validParenthesis.length - 1);

const removeOuterParentheses = function (S) {
  const leftParenthesis = '(';
  const rightParenthesis = ')';
  let leftCount = 0;
  let rightCount = 0;
  const validParenthesisStrings = [];
  let validParenthesisString = '';
  for (let i = 0; i < S.length; i++) {
    validParenthesisString += S[i];
    if (S[i] === leftParenthesis) {
      leftCount += 1;
    } else if (S[i] === rightParenthesis) {
      rightCount += 1;
    }
    if (leftCount === rightCount) {
      validParenthesisStrings.push(validParenthesisString);
      validParenthesisString = '';
      leftCount = 0;
      rightCount = 0;
    }
  }
  return validParenthesisStrings.reduce((acc, curr) => {
    acc += trimOuterParenthesis(curr);
    return acc;
  }, '');
};

export default removeOuterParentheses;
