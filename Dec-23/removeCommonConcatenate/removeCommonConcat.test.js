import removeCommonAndConcat from './removeCommonAndConcat';

describe('remove common characters and return string with unique characters', () => {
    it('should return correct output', () => {
        expect(removeCommonAndConcat('abbcne','abcxs')).toBe('ensx');
        expect(removeCommonAndConcat('','abc')).toBe('abc');
        expect(removeCommonAndConcat('abc','')).toBe('abc');
    });
});