import { Stack } from './Stack';
import { Queue } from './Queue';

const operatorPrecedence = {
  '/': 2,
  '*': 2,
  '+': 1,
  '-': 1,
};

const isFloat = (number) => {
  if (!isNaN(parseFloat(number))) {
    return parseFloat(number) % 1 !== 0;
  }
  return false;
};

const calculate = (operand1, operand2, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      if (operand1 > operand2) {
        result = operand1 - operand2;
      } else {
        result = operand2 - operand1;
      }
      break;
    case '/':
      if (operand1 > operand2) {
        result = operand1 / operand2;
      } else {
        result = operand2 / operand1;
      }
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      break;
  }
  return result;
};

const sanitize = (expression) => {
  const pattern = /\n\t\s/g;
  return expression.replace(pattern, '').replace(/\s/g, '');
};

const tokenize = (sanitizedExpression) => sanitizedExpression.split(/(?<=[-+*/])|(?=[-+*/])/);

const getPostFixExpression = (expression) => {
  if (expression.includes('(') || expression.includes(')')) {
    throw new Error('Parenthesis not supported in input!');
  }
  if (expression.includes('^')) {
    throw new Error('Exponentiation not supported in input!');
  }

  const sanitizedExpression = sanitize(expression);
  const tokens = tokenize(sanitizedExpression);
  const postFixQueue = new Queue();
  const operatorStack = new Stack();
  tokens.forEach((token) => {
    if (isFloat(token)) {
      throw new Error('Floats not supported in input!');
    }
    if (!isNaN(parseInt(token, 10))) {
      postFixQueue.enqueue(parseInt(token, 10));
    } else if (operatorStack.isEmpty()) {
      operatorStack.push(token);
    } else if (operatorPrecedence[token] > operatorPrecedence[operatorStack.peek()]) {
      operatorStack.push(token);
    } else {
      while (!operatorStack.isEmpty()) {
        postFixQueue.enqueue(operatorStack.pop());
      }
      operatorStack.push(token);
    }
  });
  while (!operatorStack.isEmpty()) {
    postFixQueue.enqueue(operatorStack.pop());
  }
  return postFixQueue;
};

export {
  sanitize, tokenize, getPostFixExpression, calculate, isFloat,
};
