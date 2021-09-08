export class Squares {
  constructor(...number) {
    this.number = number;

  }

  get sumOfSquares() {
    let number = this.number;
    let sum = 0
    for (let i = 1; i <= number; i++) {
      sum += i ** 2;
    }
    const squareOfSum = sum;
    return squareOfSum;
  }

  get squareOfSum() {
    let number = this.number;
    let sum = 0
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    const sumOfSquares = sum ** 2;
    return sumOfSquares;
  }

  get difference() {
    const sumOfSquares = this.sumOfSquares;
    const squareOfSum = this.squareOfSum;
    const difference = squareOfSum - sumOfSquares;
    return difference;
  }
}
