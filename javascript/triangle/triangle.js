//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class Triangle {
  sidesA = 0;
  sidesB = 0;
  sidesC = 0;

  constructor(...sides) { //spread operator - operações com dados
    this.sideA = sides[0];
    this.sideB = sides[1];
    this.sideC = sides[2];
    this.sides = sides;
  }
  
  get isAllSidesGreaterThan0(){
    return this.sideA > 0 && this.sideB > 0 && this.sideC > 0;
  }

  get isSumOfLenghtsGreaterThanThirdSide(){
   return this.sideA + this.sideB >= this.sideC && this.sideA + this.sideC >= this.sideB && this.sideB + this.sideC >= this.sideA;
  }
  
  get isExistent(){
    return this.isAllSidesGreaterThan0 && this.isSumOfLenghtsGreaterThanThirdSide;
  }

  get isEquilateral() {
    return this.isExistent && this.sideA == this.sideB && this.sideB == this.sideC;
  }
  get isIsosceles() {
    if (this.isExistent) {
      return this.sideA == this.sideB || this.sideA == this.sideC || this.sideB == this.sideC;
    } else {
      return false;
    }
  }

  get isScalene() {
    if (this.isExistent) {
      return this.sideA != this.sideB && this.sideA != this.sideC && this.sideB != this.sideC
    } else {
      return false;
    }
  }
  get isDegenerate() {
    return this.sideA + this.sideB == this.sideC || this.sideA + this.sideC == this.sideB || this.sideB + this.sideC == this.sideA;
  }
}