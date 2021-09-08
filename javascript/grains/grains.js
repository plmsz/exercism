export const square = (n) => {
  if (n <= 0 || n > 64) {
    throw new Error("square must be between 1 and 64");
  }
  let squareGrain = BigInt(2 ** (n - 1));
  //BigInt são números maiores que (2^51) - 1
  return squareGrain;
};


export const total = () => {
  var sum = BigInt(0);
  for (let i = 0; i < 64; i++) {
    sum += BigInt(2 ** i)
  }

  return sum;
};