import question12 from './question12';

describe('question12', () => {
    test('should give correct output', () => {
        expect(question12(["5","-2","4","C","D","9","+","+"])).toBe(27);
    });
});