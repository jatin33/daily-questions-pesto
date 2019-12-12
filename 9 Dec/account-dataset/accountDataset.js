const data = require('./dataset.json');

function accountDataset(...args) {
  return args;
}

const hundredThousandairs = () => {
  const { bankBalances } = data;
  const stateWithHundredThousandBucks = bankBalances
    .filter((stateWithBankBalance) => stateWithBankBalance.amount > 100000);
  return stateWithHundredThousandBucks;
};

const datasetWithRoundedDollar = () => {
  const { bankBalances } = data;
  const stateWithRoundedBankBalance = bankBalances.map((bankBalance) => {
    bankBalance.rounded = Math.round(bankBalance.amount);
    return bankBalance;
  });
  return stateWithRoundedBankBalance;
};

const sumOfBankBalances = () => {
  const { bankBalances } = data;
  const sumOfAllAmounts = bankBalances.reduce((acc, curr) => {
    acc += parseFloat(curr.amount);
    return acc;
  }, 0);
  return parseFloat(sumOfAllAmounts.toFixed(2));
};

const sumOfInterests = () => {
  const states = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'];
  const { bankBalances } = data;
  const sumOfAllAmounts = bankBalances
    .filter((bankBalance) => states.includes(bankBalance.state))
    .reduce((acc, curr) => {
      acc += parseFloat(curr.amount);
      return acc;
    }, 0);
  return parseFloat(((sumOfAllAmounts * 18.9) / 100).toFixed(2));
};

const getSumOfAmountsStatewise = () => {
  const { bankBalances } = data;
  const stateWithAmounts = bankBalances.reduce((acc, curr) => {
    if (curr.state in acc) {
      acc[curr.state] += parseFloat(curr.amount);
    } else {
      acc[curr.state] = parseFloat(curr.amount);
    }
    return acc;
  }, {});
  return stateWithAmounts;
};

const higherStateSums = () => {
  const stateWiseAmounts = getSumOfAmountsStatewise();
  let sum = 0;
  for (const stateAmount of Object.values(stateWiseAmounts)) {
    if (stateAmount > 1000000) sum += stateAmount;
  }
  return parseFloat(sum.toFixed(2));
};

export {
  accountDataset,
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
