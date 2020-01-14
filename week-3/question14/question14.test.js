import question14 from './question14';

describe('question14', () => {
    test('should give correct output', () => {
        expect(question14([[0, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0]])).toBe(16);
    });
});