import question9 from './question9';

describe('gives array which has even values followed by odd values', () => {
    it('should give correct output', () => {
        expect(question9([3,1,2,4])).toBe(4);
    });
});