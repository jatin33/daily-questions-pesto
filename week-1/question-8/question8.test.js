
import question8 from './question8';

describe('gives array which has even values followed by odd values', () => {
    it('should give correct output', () => {
        expect(question8([3,1,2,4])).toStrictEqual([2,4,3,1]);
    });
});