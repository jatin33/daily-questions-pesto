import question1 from './question1';

describe('question1', () => {
    it('should give correct output', () => {
        expect(question1(5)).toBe(true);
        expect(question1(11)).toBe(false);
    });
});