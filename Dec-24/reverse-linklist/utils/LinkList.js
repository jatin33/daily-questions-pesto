/* eslint-disable max-classes-per-file */
class Node {
  constructor(value) {
    this.element = value;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.size = 0;
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.size += 1;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      this.size += 1;
    }
  }

  length() {
    return this.size;
  }
}

export { LinkList };
