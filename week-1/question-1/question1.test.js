import findNumbers from './question1';

describe('find frequency of numbers with even number of digits', () => {
    it('should return -1 if input is not number', () => {
        expect(findNumbers([123,345,'678'])).toBe(-1);
    });
    it('should return correct ouptut',()=>{
        expect(findNumbers([12,123,34])).toEqual(2);      
    });
});