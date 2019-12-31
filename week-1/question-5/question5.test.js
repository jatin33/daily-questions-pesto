import question5 from './question5';

describe('should give balanced parenthesis', () => {
   it('should give correct output', () => {
       expect(question5('(()())(())(()(()))')).toBe('()()()()(())');
   });
});