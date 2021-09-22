export function cardTypeCheck(stack, card) {
  let count = 0;

  stack.forEach(x => { 
    if (x == card) count++
  });

  return count;
}


export function determineOddEvenCards(stack, type) {
  let odd = 0; let even = 0;

  for (const card of stack) {
    card % 2 == 0 ? even++ : odd++
  }

  return type ? even : odd
}

