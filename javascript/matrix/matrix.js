//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
  }

  get rows() {
    let matrix = this.matrix;
    const arrayRows = matrix.split('\n');
    const numberOfRows = matrix.lenght;

    arrayRows.map(row => {
      row.split(' ')
      const numberOfElements = row.lenght
    })
    return arrayMatrix
  }

  get columns() {
    throw new Error('Remove this statement and implement this function');
  }
}
