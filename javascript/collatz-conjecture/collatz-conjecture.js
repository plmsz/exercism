//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (number) => {
  if (number == 1) return 0;

  if (number <= 0) {
    throw new Error('Only positive numbers are allowed')
  }

  let step = 0;
  let result = 0;

  for (let i = 0; result != 1; i++) {
    if (number % 2 == 0) {
      result = number / 2;
      number = result;
      step++
    } else {
      result = number * 3 + 1;
      number = result;
      step++
    }
  }
  return step
};
