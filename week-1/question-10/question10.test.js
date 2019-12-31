import question10 from './question10';

describe('gives array which has even values followed by odd values', () => {
    it('should give correct output', () => {
        expect(question10(1,22)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]);
    });
});