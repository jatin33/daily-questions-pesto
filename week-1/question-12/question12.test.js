
import question12 from './question12';

describe('question12', () => {
    it('should give correct output', () => {
        expect(question12([-7,-3,2,3,11])).toStrictEqual([4,9,9,49,121]);
    });
});
