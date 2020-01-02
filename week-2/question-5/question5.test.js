import question5 from './question5';

describe('question 5', () => {
    it('should give correct output', () => {
        expect(question5(["Hello", "Alaska", "Dad", "Peace"])).toStrictEqual(["Alaska", "Dad"]);
    });
});