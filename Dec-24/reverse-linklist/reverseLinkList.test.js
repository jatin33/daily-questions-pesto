import {reverse} from './reverseLinkList';
import {LinkList} from './utils/LinkList';

describe('reverse the given linklist', () => {
    const linkList = new LinkList();
    linkList.append(1);
    linkList.append(2);
    linkList.append(3);
    const reverseLinkList = new LinkList();
    reverseLinkList.append(3);
    reverseLinkList.append(2);
    reverseLinkList.append(1);
    const emptyLinkList = new LinkList();
    it('should validate input params', () => {
        expect(()=>{reverse()}).toThrow('Input parameters required!');
        expect(()=>{reverse('1,2,3')}).toThrow('Input parameters can be only linklist');
        expect(()=>{reverse([])}).toThrow('Input parameters can be only linklist');
    });
    it('should reverse the given linklist', () => {
        expect(reverse(linkList)).toStrictEqual(reverseLinkList);
        expect(reverse(emptyLinkList)).toStrictEqual(emptyLinkList);
    });
});