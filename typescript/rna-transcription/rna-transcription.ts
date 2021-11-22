/*Refazer*/
// enum DnaBasis {
//   G = "C",
//   C = "G",
//   T = "A",
//   A = "U",
// }
// type KeyDna = keyof typeof DnaBasis; //criando um tipo que aceita so as letras do enum
// export function toRna(dna: string): string {
//   let rnaResultado = ""; //criando uma variavel pra colocar os resultados

//   /*varrendo a string letra por letra*/
//   for (const elemento of dna) {
//     /*testando se alguma letra nao é correspondente ao enum e enviando um erro */
//     if (!(elemento in DnaBasis)) throw Error("Invalid input DNA.");
//     rnaResultado += DnaBasis[<KeyDna>elemento];
//   }
//   /*somando cada elemento no array rnaResultado e transformando a variavel no tipo dentro da tag, elemento é uma string para acessar as chaves de DnaBasis usa-se as tags para transforma-la do tipo DnaBasis */
//   return rnaResultado;
// }
