export const classify = (number) => {
  if (number <= 0) {
    throw new Error('Classification is only possible for natural numbers.')
  }

  if (number == 1) return 'deficient';

  let sum = 0

  for (let i = 1; i < number; i++) {
    if (number % i == 0) {
      sum += i;
    }
  }

  if (sum == number) {
    return 'perfect';
  } else if (sum > number) {
    return 'abundant';
  } else if (sum < number) {
    return 'deficient';
  }

};
