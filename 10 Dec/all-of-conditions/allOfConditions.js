
function allOfConditions(...functionsToApply) {
  // eslint-disable-next-line
  return input => functionsToApply
    .reduce((finalResult, currentFunction) => finalResult && currentFunction(input), true);
}

export {
  allOfConditions,
};
