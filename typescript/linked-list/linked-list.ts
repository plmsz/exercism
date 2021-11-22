class Item<TElement> {
  /**criando uma classe que vai ser o item para guardar as informções do proximo e do anterior */
  public valor: TElement; /**essa variavel precisa ser publica pq minha outra classe vai ter que acessar ela */
  public proximo: Item<TElement> | null =
    null; /**ex: o próximo de um item que é numero => outro item que é numero */
  public anterior: Item<TElement> | null =
    null; /**se for o primeiro ou o ultimo o proximo/anterior podem ser undefined; Assim, usa-se o | que ´é o union type */

  constructor(valor: TElement) {
    this.valor = valor;
  }
}
export class LinkedList<TElement> {
  /**classe como genérica leva o <tipo>, pq n sei qual tipo vai ser */
  /**é uma lista em que cada compomente tem a informação de quem é o anterior e o posterior mesmo n estando em ordem(como se estivesse embaralhado) */
  /**preciso primeiro guardar o primeiro e o ultimo item da listaa */
  private inicio: Item<TElement> | null =
    null; /**tem que ter undefined pra quando eu criar a lista, que nao tem um inicio ou fim  */
  private fim: Item<TElement> | null = null;

  public push(element: TElement) {
    /**ao instanciar vai ter que dar um tipo tb. exemplo: new LinkedList<number> */
    const item = new Item(element); /**criando um item com  parametro passado */
    if (this.fim === null) {
      /**se for uma lista vazia */
      this.inicio = item; /**atribui o item criado para o fim */
      this.fim = item; /**atribuindo o mesmo item para o inicio */
    } else {
      this.fim.proximo =
        item; /**colocando um valor dentro da propriedade(proximo) do fim, que antes era undefined */
      item.anterior =
        this.fim; /**dizendo pra ele "seu anterior eh esse que ta no fim agora" */
      this.fim = item; /**atualizando o fim para o element */
    }
  }

  /**removendo um valor do final da lista: */

  public pop(): TElement {
    if (this.fim === null) {
      throw new Error("A lista está vazia, não posso realizar o pop.");
    } else {
      const retorno = this.fim.valor; /**chamando o valor do fim de retorno  */
      const novoFim = this.fim.anterior;
      if (novoFim !== null) {
        /**vendo se o elemento nao era o unico na lista */
        novoFim.proximo = null; /**excluindo o antigo fim */
        this.fim = novoFim;
      } else {
        this.fim = null;
        this.inicio = null;
      }

      return retorno;
    }
  }

  /**removendo um valor do começo da lista: */

  public shift(): TElement {
    if (this.inicio === null) {
      throw new Error("A lista está vazia, não posso realizar o pop.");
    } else {
      const retornoDoInicio = this.inicio.valor;
      const novoInicio = this.inicio.proximo;
      if (novoInicio !== null) {
        novoInicio.anterior = null;
        this.inicio = novoInicio;
      } else {
        this.inicio = null;
        this.fim = null;
      }

      return retornoDoInicio;
    }
  }
  public unshift(element: TElement) {
    const item = new Item(element);
    if (this.inicio === null) {
      this.fim = item;
      this.inicio = item;
    } else {
      this.inicio.anterior = item;
      item.proximo = this.fim;
      this.inicio = item;
    }
  }
  public delete(element: TElement) {
    if (this.inicio === null) {
      return 0;
    }
    var itemAtual = this.inicio;
    if (this.fim == this.inicio && itemAtual.valor == element) {
      this.inicio = null;
      this.fim = null;
    }
    while (itemAtual.proximo) {
      if (itemAtual.valor == element) {
        //Guardando as posições antes e depois do item a ser apagado
        const anterior = itemAtual.anterior;
        const proximo = itemAtual.proximo;
        //Desligando o item atual da lista
        itemAtual.anterior = null;
        itemAtual.proximo = null;
        //Religando os itens da lista
        if (anterior !== null) {
          //Se não for o primeiro da lista, religa ele caso contrário não precisa fazer nada
          anterior.proximo = proximo;
        } else {
          //Sabemos que é o primeiro item da lista, precisamos atualizar o inicio da lista
          this.inicio = proximo;
        }
        if (proximo !== null) {
          //Se não for o ultimo item da lista, religa ele, caso contrário não precisa fazer nada
          proximo.anterior = anterior;
        } else {
          //Sabemos que é o ultimo item da lista, precisamos atualizar o fim da lista
          this.fim = anterior;
        }
        break;
      }
      itemAtual = itemAtual.proximo;
    }
  }
  public count(): number {
    if (this.inicio === null) {
      return 0;
    }

    var contador = 1;
    var itemAtual = this.inicio;
    while (itemAtual.proximo) {
      contador++;
      itemAtual = itemAtual.proximo;
    }

    return contador;
  }
}
