export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}

export function limesToCut(wedgesNeeded, limes) {
  let numberOfLimes = 0; let wedges = 0;

  if (wedgesNeeded == 0) return 0;

  while (wedges < wedgesNeeded) {
    switch (limes[numberOfLimes]) {
      case 'small':
        wedges += 6;
        numberOfLimes++
        break;
      case 'medium':
        wedges += 8;
        numberOfLimes++
        break;
      case 'large':
        wedges += 10;
        numberOfLimes++
        break;
      default:
        return limes.length;
    }
  }

  return numberOfLimes;
}

export function remainingOrders(timeLeft, orders) {
  let index = 0; let totalTime = 0;

  while (index < orders.length){
    totalTime += timeToMixJuice(orders[index]);
    orders.shift();
    if (totalTime >= timeLeft) {
      break;
    }
  }
return orders;

}
