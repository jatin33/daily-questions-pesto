import question1 from './question1';

describe('question1', () => {
    it('should give correct output', () => {
        expect(question1('we will we will rock you','we','will')).toStrictEqual(['we','rock']);
    });
});