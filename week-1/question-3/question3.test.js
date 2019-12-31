import question3 from './question3';

describe('should give number of balanced strings', () => {
    it('should give correct output', () => {
        expect(question3('RLRRLLRLRL')).toBe(4);
    });
});