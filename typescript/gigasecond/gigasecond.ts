/*Refazer*/ 
// export class Gigasecond {
//   // quer q ngm acesse essa variavel pq ela é uma propriedade interna da classe, já o readonly gravar no construtor e não vai usar mais ela, o private - como se fosse o const
//   private readonly secondsFromEpoch: number;
//   public constructor(initialDate: Date) {
//     //**contrutor é como se fosse uma função molde, nesse caso pegando o parametro q foi dado de data inicial*/
//     this.secondsFromEpoch = initialDate.getTime();
//   } /**public metodo pode ser acessado por todo mundo */
//   public date(): Date {
//     return new Date(this.secondsFromEpoch + 1e12);
//   }
// }
