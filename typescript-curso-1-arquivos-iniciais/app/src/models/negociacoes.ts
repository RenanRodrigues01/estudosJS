
import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

// sintaxe opicional para declaração de tipo
export class Negociacoes implements Modelo<Negociacoes> {
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

    public ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.listar())
    }
}