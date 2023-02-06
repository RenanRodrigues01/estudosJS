import { imprimivel } from "../utils/imprimivel.js";
export class Negociacoes extends imprimivel {
    constructor() {
        super(...arguments);
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
