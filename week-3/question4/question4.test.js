import question4 from './question4';

describe('question 4', () => {
    test('should give correct output', () => {
        expect(question4([[1,2,3],[4,5,6],[7,8,9]],1)).toEqual([[9,1,2],[3,4,5],[6,7,8]]);
    });
});