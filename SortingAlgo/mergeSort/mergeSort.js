const merge = (arr1, arr2) => {
  const mergedArray = [];
  let i = 0; let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArray.push(arr1[i]);
      i += 1;
    } else {
      mergedArray.push(arr2[j]);
      j += 1;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i += 1;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j += 1;
  }
  return mergedArray;
};

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const midpoint = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, midpoint));
  const right = mergeSort(array.slice(midpoint));
  return merge(left, right);
}

export default mergeSort;
