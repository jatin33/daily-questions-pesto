const middleOfLinkList = (list) => {
  const length = list.getLength();
  const middleIndex = Math.floor(length / 2);
  let startIndex = 0;
  let middleElement = list.head;
  while (startIndex < middleIndex) {
    middleElement = middleElement.next;
    startIndex += 1;
  }
  return middleElement.element;
};

export { middleOfLinkList };
