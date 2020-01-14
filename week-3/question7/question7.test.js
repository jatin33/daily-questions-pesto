import question7 from './question7';

describe('question7', () => {
    test('should give correct output', () => {
        expect(question7([4,9,5],[9,4,9,8,4])).toEqual([4,9]);
    });
});