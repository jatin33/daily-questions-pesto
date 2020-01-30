import sort from './mergeSort';

describe('sorts given input', () => {
    it('should give correct output', () => {
        expect(sort([3,44,38,5,47,15])).toStrictEqual([3,5,15,38,44,47]);
    });
});