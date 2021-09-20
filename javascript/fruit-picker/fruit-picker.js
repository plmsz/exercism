import { checkStatus, checkInventory } from './grocer';

export function isServiceOnline() {
  const result = checkStatus((response) => (response == "ONLINE"));
  return result;
}

export function pickFruit(variety, quantity, callback) {
  const query = {
    variety: variety,
    quantity: quantity
  }
  return checkInventory(query, callback)
}

export function purchaseInventoryIfAvailable(err, isAvailable) {
  if (err) throw new Error(err);
  return(isAvailable ? 'PURCHASE' : 'NOOP')
}

export function pickAndPurchaseFruit(variety, quantity) {
  const query = {
    variety: variety,
    quantity: quantity
  }
  return checkInventory(query, purchaseInventoryIfAvailable)
}
