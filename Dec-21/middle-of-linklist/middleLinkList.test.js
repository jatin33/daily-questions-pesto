import { middleOfLinkList } from './middleOfLinkList';
import { LinkList } from './utils/LinkList';

describe('find middle element of given link list', () => {
  test('gives correct output for one test case', () => {
    const linkList = new LinkList();
    linkList.append(1);
    linkList.append(2);
    linkList.append(3);
    linkList.append(4);
    linkList.append(5);
    expect(middleOfLinkList(linkList)).toBe(3);
  });
  test('gives correct output for another test case', () => {
    const linkList = new LinkList();
    linkList.append(6);
    linkList.append(7);
    linkList.append(8);
    linkList.append(9);
    linkList.append(10);
    linkList.append(11);
    expect(middleOfLinkList(linkList)).toBe(9);
  });
});
