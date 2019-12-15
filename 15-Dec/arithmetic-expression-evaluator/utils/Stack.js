class Stack {
  constructor() {
    this.list = [];
  }

  push(element) {
    this.list.push(element);
  }

  pop() {
    return this.list.pop();
  }

  peek() {
    return this.list[this.list.length - 1];
  }

  isEmpty() {
    return this.list.length === 0;
  }
}


export { Stack };
