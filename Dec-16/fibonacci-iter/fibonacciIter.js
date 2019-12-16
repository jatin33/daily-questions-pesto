const fibonacciIter = {
  [Symbol.iterator]: () => {
    const iterator = {
      a: 0,
      b: 1,
      next() {
        const current = this.a + this.b;
        this.a = this.b;
        this.b = current;
        return {
          value: current,
          done: false,
        };
      },
    };
    return iterator;
  },
};

export {
  fibonacciIter,
};
