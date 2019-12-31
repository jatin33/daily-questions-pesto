import question4 from './question4';

describe('gives count of odd values', () => {
   it('should give correct output', () => {
       expect(question4(2,3,[[0,1],[1,1]])).toBe(6);
   });
});