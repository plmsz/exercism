export class Triangle {
  private readonly sideA: number;
  private readonly sideB: number;
  private readonly sideC: number;

  constructor(...sides: number[]) {
    this.sideA = sides[0];
    this.sideB = sides[1];
    this.sideC = sides[2];
  }

  get isAllSidesGreaterThan0(): boolean {
    return this.sideA > 0 && this.sideB > 0 && this.sideC > 0;
  }

  get isSumOfLenghtsGreaterThanThirdSide():boolean {
    return (
      this.sideA + this.sideB >= this.sideC &&
      this.sideA + this.sideC >= this.sideB &&
      this.sideB + this.sideC >= this.sideA
    );
  }

  get isExistent(): boolean {
    return (
      this.isAllSidesGreaterThan0 && this.isSumOfLenghtsGreaterThanThirdSide
    );
  }

  get isEquilateral(): boolean {
    return (
      this.isExistent && this.sideA == this.sideB && this.sideB == this.sideC
    );
  }
  get isIsosceles(): boolean {
    if (this.isExistent) {
      return (
        this.sideA == this.sideB ||
        this.sideA == this.sideC ||
        this.sideB == this.sideC
      );
    } else {
      return false;
    }
  }

  get isScalene(): boolean {
    if (this.isExistent) {
      return (
        this.sideA != this.sideB &&
        this.sideA != this.sideC &&
        this.sideB != this.sideC
      );
    } else {
      return false;
    }
  }
}