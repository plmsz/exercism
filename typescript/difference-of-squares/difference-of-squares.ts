export class Squares {
  private readonly numeros: number[]; 
  constructor(count: number) {
    this.numeros = Array.from(this.generator(count)); 
  }

  private *generator(count: number): Iterable<number> {
    let item = 1;
    while (item <= count) {
      yield item++; //cada vez que satisfaz ele retorna um item e vai pra próximo
    }
  }

  get sumOfSquares(): number {
    return this.numeros.reduce((acc, cur) => acc + cur ** 2);
  }

  get squareOfSum(): number {
    return this.numeros.reduce((acc, cur) => acc + cur) ** 2;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}
