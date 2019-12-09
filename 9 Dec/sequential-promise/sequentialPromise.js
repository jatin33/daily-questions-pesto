
function sequentialPromise(promises) {
  return new Promise((resolve) => {
    const results = promises.reduce((acc, currentPromise) => acc.then(() => currentPromise()), Promise.resolve());
    resolve(results);
  });
}


export {
  sequentialPromise,
};
