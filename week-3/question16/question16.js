/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = (s, t) => {
  const alphabetOccurencesForString = Array(26).fill(0);
  const alphabetOccurencesForText = Array(26).fill(0);
  // const temp = [...t];
  // for(let i=0;i<s.length;i++){
  //  if(temp.includes(s[i])){
  //      temp.splice(temp.indexOf(s[i]),1);
  //  }
  // }
  // return temp[0];
  for (let i = 0; i < s.length; i++) {
    alphabetOccurencesForString[s[i].charCodeAt(0) - 97] += 1;
  }
  for (let i = 0; i < t.length; i++) {
    alphabetOccurencesForText[t[i].charCodeAt(0) - 97] += 1;
  }

  for (let k = 0; k < 26; k++) {
    if (alphabetOccurencesForString[k] !== alphabetOccurencesForText[k]) {
      return String.fromCharCode(k + 97);
    }
  }
  return '';
};

export default findTheDifference;
