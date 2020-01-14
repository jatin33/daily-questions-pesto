import question10 from './question10';

describe('question10', () => {
    test('should give correct output', () => {
        expect(question10([4,1,2],[1,3,4,2])).toEqual([-1,3,-1]);
    });
});