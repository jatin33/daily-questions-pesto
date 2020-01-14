import question2 from './question2';

describe('question2', () => {
    test('should give correct output', () => {
        expect(question2(5)).toBe(2);
        expect(question2(7)).toBe(0);
        expect(question2(10)).toBe(5);
    });
});