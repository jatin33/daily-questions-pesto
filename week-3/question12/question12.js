/**
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = (ops) => {
  const stack = [];
  ops.forEach((op) => {
    if (parseInt(op, 10)) {
      stack.push(parseInt(op, 10));
    } else if (op === 'C') {
      stack.pop();
    } else if (op === 'D') {
      stack.push(stack[stack.length - 1] * 2);
    } else if (op === '+') {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    }
  });
  return stack.reduce((acc, curr) => acc + curr, 0);
};

export default calPoints;
