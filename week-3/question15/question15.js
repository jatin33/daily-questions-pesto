/**
 * @param {number[]} deck
 * @return {number[]}
 */
const deckRevealedIncreasing = (deck) => {
  const localDeck = [...deck];
  localDeck.sort((a, b) => a - b);
  const queue = [];
  while (localDeck.length) {
    queue.unshift(localDeck.pop());
    queue.unshift(queue.pop());
  }
  queue.push(queue.shift());
  return queue;
};

export default deckRevealedIncreasing;
