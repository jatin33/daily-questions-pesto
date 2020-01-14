import question15 from './question15';

describe('question15', () => {
    test('should give correct output', () => {
        expect(question15([17,13,11,2,3,5,7])).toEqual([2,13,3,11,5,17,7]);
    });
});