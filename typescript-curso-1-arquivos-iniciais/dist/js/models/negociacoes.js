// sintaxe opicional para declaração de tipo
export class Negociacoes {
    constructor() {
        //private negociacoes:   = [];/ cria um tipo generico 
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // sintaxe alternativa para declaração de apenas leitura
    // listar(): ReadonlyArray<Negociacao>
    listar() {
        return this.negociacoes;
    }
}
