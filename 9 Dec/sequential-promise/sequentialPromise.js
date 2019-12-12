
function sequentialPromise(promises) {
  return new Promise((resolve) => {
    const results = promises.reduce((acc, currentPromise) => acc.then((val) => currentPromise(val)), Promise.resolve());
    resolve(results);
  });
}


export {
  sequentialPromise,
};
