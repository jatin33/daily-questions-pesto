import question5 from './question5';

describe('question5', () => {
    test('should give correct output', () => {
        expect(question5(7,4)).toEqual([1,2,3,1]);
    });
});