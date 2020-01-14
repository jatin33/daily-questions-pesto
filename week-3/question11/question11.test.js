import question11 from './question11';

describe('question11', () => {
    test('should give correct output', () => {
        expect(question11("apple apple","banana")).toEqual(["banana"]);
    });
});