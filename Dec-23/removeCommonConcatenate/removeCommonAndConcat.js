const removeCommonAndConcate = (string1, string2) => {
  if (string1 === '') {
    return string2;
  }
  if (string2 === '') {
    return string1;
  }
  const combinedString = string1.concat(string2);
  combinedString.split('').sort();
  const characterOccurance = {};
  for (let i = 0; i < combinedString.length; i += 1) {
    const currentCharacter = combinedString[i];
    if (!Object.prototype.hasOwnProperty.call(characterOccurance, currentCharacter)) {
      characterOccurance[currentCharacter] = 1;
    } else {
      characterOccurance[currentCharacter] += 1;
    }
  }
  let uniqueCharacters = '';
  // eslint-disable-next-line no-restricted-syntax
  for (const [character, frequency] of Object.entries(characterOccurance)) {
    if (frequency === 1) {
      uniqueCharacters += character;
    }
  }
  return uniqueCharacters.split('').sort().join('');
};

export default removeCommonAndConcate;
