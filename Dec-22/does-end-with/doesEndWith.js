
function doesEndWith(sublist, list) {
  const listLength = list.length;
  const sublistLength = sublist.length;
  const remainingListLength = listLength - sublistLength;
  if (Array.isArray(list) && Array.isArray(sublist)) {
    list = list.join('');
    sublist = sublist.join('');
  }
  const remainingList = list.substring(remainingListLength);
  return remainingList === sublist;
}

export default doesEndWith;
