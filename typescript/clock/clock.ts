export class Clock {
  private readonly hora: number;
  private readonly minutos: number | undefined;

  constructor(hour: number, minute?: number) {
    this.hora = this.ajustarHora(hour, minute ?? 0);
    this.minutos = this.ajustarMinuto(minute ?? 0);
  }

  private ajustarMinuto(minute: number): number {
    let minuto: number = minute;
    minuto = minuto % 60;
    

    if (minuto < 0) {
      minuto = 60 + minuto;
    }

    return minuto;
  }
  private ajustarHora(hour: number, minute: number): number {
    let hora: number = hour;

    // se o resto de minutos por 60 for negativo, deverá subtrair uma hora
    if (minute % 60 < 0) {
      hora--;
    }

    hora += Math.trunc(minute / 60); //pega a parte inteira e joga os decimais fora

    hora = hora % 24;

    if (hora < 0) {
      hora = 24 + hora;
    }
    return hora;
  }

  public toString(): string {
    const hora = this.hora.toString().padStart(2, "0");
    const minuto = this.minutos!.toString().padStart(2, "0");
    return `${hora}:${minuto}`;
  }

  public plus(minutes: number): Clock {
    return new Clock(this.hora,this.minutos! + minutes)
  }

  public minus(minutes: number): Clock {
    return new Clock(this.hora,this.minutos! - minutes)
  }

  public equals(other: Clock): boolean {
    return this.hora === other.hora && this.minutos === other.minutos;
  }
}
