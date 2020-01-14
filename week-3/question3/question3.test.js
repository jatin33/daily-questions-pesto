import question3 from './question3';

describe('question3', () => {
    test('should give correct output', () => {
        expect(question3([[1, 2], [3, 4]], 1, 4)).toEqual([[1, 2, 3, 4]]);
    });
});