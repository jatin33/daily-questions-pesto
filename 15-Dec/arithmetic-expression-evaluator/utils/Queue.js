class Queue {
  constructor() {
    this.list = [];
  }

  enqueue(element) {
    this.list.push(element);
  }

  dequeue() {
    this.list.shift();
  }
}

export { Queue };
