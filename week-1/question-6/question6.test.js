import question6 from './question6';

describe('removes adjacent duplicates', () => {
    it('should give correct output', () => {
        expect(question6('abbaca')).toBe('ca');
    });
});