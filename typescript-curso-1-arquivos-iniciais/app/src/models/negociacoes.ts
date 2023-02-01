import { Negociacao } from "./negociacao.js";

// sintaxe opicional para declaração de tipo
export class Negociacoes {
    //private negociacoes:   = [];/ cria um tipo generico 
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

// sintaxe alternativa para declaração de apenas leitura
// listar(): ReadonlyArray<Negociacao>
    public listar(): readonly Negociacao[] {
        return this.negociacoes;
    }
}