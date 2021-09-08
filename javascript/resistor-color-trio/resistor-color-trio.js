export class ResistorColorTrio {
  constructor(...cor) {
    this.cor = cor[0];
  }

  get label() {
    const colors = {
      'black': 0,
      'brown': 1,
      'red': 2,
      'orange': 3,
      'yellow': 4,
      'green': 5,
      'blue': 6,
      'violet': 7,
      'grey': 8,
      'white': 9
    }
    let value = +('' + colors[this.cor[0]] + colors[this.cor[1]]) * 10 ** colors[this.cor[2]]; //eg: 4 + 7 * 10^4 = 470000

    //amount of zeros
    const expoent = Math.floor(Math.log10(value)) // 5

    let unit = Math.floor(expoent / 3) // 5/3= 1 //unit of measurement

    value = value / 10 ** (unit * 3)

    //Math.log10(100000) = 5, or 10^5 = 100000, Math.log10(470000) = 5,67   

    if (Number.isNaN(value)) {
      throw new Error('invalid color');
    }

    switch (unit) {
      case 0:
        unit = ""
        break;
      case 1:
        unit = "kilo"
        break;
      case 2:
        unit = "mega"
        break;
      case 3:
        unit = "giga"
        break;
    }
    return `Resistor value: ${value} ${unit}ohms`
  }
}