import question3 from './question3';

describe('question 3', () => {
    it('should give correct output', () => {
        expect(question3([[1,2,3],[4,5,6],[7,8,9]])).toStrictEqual([[1,4,7],[2,5,8],[3,6,9]]);
        expect(question3([[1,2,3],[4,5,6]])).toEqual([[1,4],[2,5],[3,6]]);
    });
});