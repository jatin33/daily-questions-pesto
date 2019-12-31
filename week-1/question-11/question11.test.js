import question11 from './question11';

describe('gives array which has even values followed by odd values', () => {
    it('should give correct output', () => {
        expect(question11([[1,2,2,1,1,3]])).toBe(true);
    });
});
