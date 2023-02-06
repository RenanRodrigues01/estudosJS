import { imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";

// sintaxe opicional para declaração de tipo
export class Negociacoes implements imprimivel {
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

    public imprimeTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}