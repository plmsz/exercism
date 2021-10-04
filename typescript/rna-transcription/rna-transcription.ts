enum DnaBasis {
  G = "C",
  C = "G",
  T = "A",
  A = "U",
}
type DnaBase = keyof typeof DnaBasis; //criando um tipo que aceita so as letras do enum
export function toRna(dna: string): string {
  let rnaResultado = ""; //criando uma variavel pra colocar os resultados

  for (const elemento of dna) {
    /*varrendo a string letra por letra*/
    if (!(elemento in DnaBasis))
      throw Error(
        "Invalid input DNA."
      ); /*testando se alguma letra nao é correspondente ao enum e enviando um erro */
    rnaResultado +=
      DnaBasis[
        <DnaBase>elemento
      ]; /*somando cada elemento no array rnaResultado e transformando a variavel no tipo dentro da tag */
  }
  return rnaResultado;
}
