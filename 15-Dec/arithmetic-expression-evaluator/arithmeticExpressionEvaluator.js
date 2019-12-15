import { getPostFixExpression, calculate } from './utils/helpers';
import { Stack } from './utils/Stack';

function arithmeticExpressionEvaluator(infixExpression) {
  if (typeof infixExpression !== 'string') {
    throw new Error('Input should only be string!');
  }
  const postfixExpressionTokens = getPostFixExpression(infixExpression).list;
  const operandStack = new Stack();
  postfixExpressionTokens.forEach((token) => {
    if (typeof token === 'number') {
      operandStack.push(token);
    } else {
      operandStack.push(calculate(operandStack.pop(), operandStack.pop(), token));
    }
  });
  return operandStack.peek();
}

export {
  arithmeticExpressionEvaluator,
};
