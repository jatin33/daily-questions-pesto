import { Stack } from './utils/Stack';
import { LinkList } from './utils/LinkList';

const reverse = (linklist) => {
  if (linklist === undefined) {
    throw new Error('Input parameters required!');
  }
  if (!(linklist instanceof LinkList)) {
    throw new Error('Input parameters can be only linklist');
  }
  const linkListElements = new Stack();
  while (linklist.head) {
    linkListElements.push(linklist.head.element);
    linklist.head = linklist.head.next;
  }
  const reverseLinkList = new LinkList();
  while (linkListElements.size() > 0) {
    reverseLinkList.append(linkListElements.pop());
  }
  return reverseLinkList;
};

export { reverse };
