export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    listar() {
        return this.negociacoes;
    }
    imprimeTexto() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}
