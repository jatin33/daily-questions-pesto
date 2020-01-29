import sort from './insertionSort';

describe('should sort given input', () => {
   it('should give correct output', () => {
       expect(sort([3,44,38,5,47,15])).toEqual([3,5,15,38,44,47]);
   }); 
});