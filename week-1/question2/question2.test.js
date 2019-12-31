import jewelsAndStones from './question2';

describe('returns jewels from stones', () => {
    it('should throw error for empty inputs',()=>{
        expect(()=>{jewelsAndStones()}).toThrow('Input is empty!');
    });
    it('should return correct output',()=>{
        expect(jewelsAndStones('aA','aAAbbbb')).toBe(3);
        expect(jewelsAndStones('z','ZZ')).toBe(0);
    });
});