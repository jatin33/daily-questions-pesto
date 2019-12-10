
function primalityTest(integer) {
  if (integer === -1 || integer === 0 || integer === 1) {
    return false;
  } if (integer === 2) {
    return true;
  }
  let isPrime = true;
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      isPrime = false;
    }
  }
  return isPrime;
}

export {
  primalityTest,
};
