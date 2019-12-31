import question7 from './question7';

describe('gives unique morse code representation', () => {
    it('should give correct output', () => {
        expect(question7(["gin", "zen", "gig", "msg"])).toBe(2);
    });
});