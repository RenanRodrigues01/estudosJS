import { Negociacao } from "./negociacao.js";

// sintaxe opicional para declaração de tipo
// private negociacoes: Negociacao[] = [];
export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }
// sintaxe alternativa para declaração de apenas leitura
//  listar(): readonly negociacao[]
    listar(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}