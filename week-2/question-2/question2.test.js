import question2 from './question2';

describe('question 2', () => {
    it('should give correct output', () => {
        expect(question2(2,3,1,2)).toStrictEqual([[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]);
    });
});