/*Refazer*/
// export class Robot {
//   private nome: string = ""; /*criando uma variavel privada do tipo string*/
//   private readonly alfabeto = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];
//   /*para previnir de criar a lista toda vez que chamar a função, ja deixa ela declarada aqui*/
//   private readonly numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; //*teoricamente essa parte não precisaria de array, pois o math.random gera um numero de 0 a 10, coloquei só para entender melhor */
//   private static listaDeNomes =
//     new Set<string>(); /**criando uma propriedade da classe robot que é uma lista vazia, onde serão enviados os nomes gerados pela função generatename depois */

//   /*O objeto Set permite que você armazene valores únicos de qualquer tipo, desde valores primitivos, ou seja ele retorna uma array, com numeros unicos */

//   /*static => a mesma lista serve para todos os robos, ou seja todos de uma classe, entao ao inves de falar this.listadenomes vai ser robot.listaDeNomes */

//   constructor() {
//     /*criando um contrutor pq cada vez que for acionado vai criar um novo nome */
//     //this.nome = this.generateName() /**chamando a variavel privada = a função de geração de nome */
//     this.resetName();
//   }

//   private generateName(): string {
//     let duasLetras = "";
//     let tresNumeros = "";

//     for (let i = 0; i < 2; i++) {
//       /*varrendo a array enquanto i for < 2, porque são as duas primeiras posições que eu quero */
//       duasLetras +=
//         this.alfabeto[
//           Math.floor(Math.random() * 26)
//         ]; /*26 pq o math random gera numero de [0,1] onde o 1 nunca cai, entao como sao 25 (de 0 a 25) posições do array, coloca um a mais
//         já o += funciona pra jogar o valor da array na string vazia*/
//     }

//     for (let i = 0; i < 3; i++) {
//       tresNumeros += this.numeros[Math.floor(Math.random() * 10)];
//     }

//     let nomeFinal = duasLetras + tresNumeros;
//     return nomeFinal;
//   }

//   public get name(): string {
//     /*usando get name pq no teste ele usa robot.name (classe.propriedade) pra acessar o nome */
//     return this.nome; /**retornando o nome criado pelo construtor */
//   }

//   public resetName(): void {
//     let novoNome =
//       this.generateName(); /**pegando o nome que foi gerado no generate (o nomeFinal) */

//     while (Robot.listaDeNomes.has(novoNome)) {
//       /* verificando se o set (inicialmente vazio) de nomes inclui o novo nome gerado */
//       novoNome =
//         this.generateName(); /**caso o nome ja esteja incluso, ele gera novamente outro nome atraves da função generatename() e volta no while pra verificar se ja tem */
//     }

//     Robot.listaDeNomes.add(
//       novoNome
//     ); /**e ele nao estiver incluso, sabendo que o nome é único, ele é adicionado agora com o add no novo set */
//     this.nome = novoNome; /**substituindo o nome do robô depois de resetado */
//   }

//   public static releaseNames(): void {
//     /**depois de cada teste ele apaga a lista, para poder fazer outro teste*/
//     Robot.listaDeNomes.clear(); /**limpando o set (não se usa this.listadenomes pq é uma variavel estatica, que vai ser usada por todos os elementos da classe, sendo chamada como propriedade da classe.) */
//     /* Usa o static pois  ele não está instanciando, ou seja não se cria um new Robot, com diferentes caracterisitcas, assim todos os robos vão ter o mesmo método clear, do contrário precisariamos fazer fora blablabla ???*/
//   }
// }
