/* eslint-disable no-restricted-syntax */
/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = function (words) {
  const alphabetToMorseCode = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
  };

  const transformations = new Set();
  for (const word of words) {
    let morseVersion = '';
    for (const letter of word) {
      morseVersion += alphabetToMorseCode[letter];
    }
    transformations.add(morseVersion);
  }
  return transformations.size;
};

export default uniqueMorseRepresentations;
