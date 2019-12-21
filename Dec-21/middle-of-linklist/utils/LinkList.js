import { ListNode } from './ListNode';

class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const node = new ListNode(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.size += 1;
  }

  getLength() {
    return this.size;
  }
}

export { LinkList };
