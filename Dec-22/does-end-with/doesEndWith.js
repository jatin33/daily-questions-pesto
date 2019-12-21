
function doesEndWith(sublist, list) {
  const listLength = list.length;
  const sublistLength = sublist.length;
  const remainingListLength = listLength - sublistLength;
  let localListCopy = '';
  let localSubListCopy = '';
  if (Array.isArray(list) && Array.isArray(sublist)) {
    localListCopy = list.join('');
    localSubListCopy = sublist.join('');
  }
  const remainingList = localListCopy.substring(remainingListLength);
  return remainingList === localSubListCopy;
}

export default doesEndWith;
