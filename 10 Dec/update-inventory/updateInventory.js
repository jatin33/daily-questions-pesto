function updateInventory(currentInventory, incomingInventory) {
  if (currentInventory.length === 0) {
    return incomingInventory.sort((a, b) => (a[1] > b[1] ? 1 : -1));
  } if (incomingInventory.length === 0) {
    return currentInventory.sort((a, b) => (a[1] > b[1] ? 1 : -1));
  }
  const updatedInventory = [];
  for (let i = 0; i < currentInventory.length; i++) {
    for (let j = 0; j < incomingInventory.length; j++) {
      const currentItemCount = currentInventory[i][0];
      const incomingItemCount = incomingInventory[j][0];
      const currentItemName = currentInventory[i][1];
      const incomingItemName = incomingInventory[j][1];
      if (currentItemName === incomingItemName) {
        const updatedStock = [currentItemCount + incomingItemCount, currentItemName];
        updatedInventory.push(updatedStock);
        currentInventory.splice(i, 1);
        incomingInventory.splice(j, 1);
        updatedInventory.push(incomingInventory[j]);
      }
    }
    updatedInventory.push(currentInventory[i]);
  }
  updatedInventory.sort((a, b) => (a[1] > b[1] ? 1 : -1));
  return updatedInventory;
}

export {
  updateInventory,
};
