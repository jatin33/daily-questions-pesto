import question15 from './question15';

describe('question15', () => {
    it('should give correct output', () => {
        expect(question15(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])).toBe(2);
    });
});
