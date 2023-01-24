import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQauntidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes()
    

    constructor () {
        this.inputData = document.querySelector("#data");
        this.inputQauntidade = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")
    }

    adiciona() {
        const negociacao = this.criaNegociação()
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.listar());
        this.limpaForm()
    }

    criaNegociação(): Negociacao {
        const exp: RegExp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ","));
        const quantidade = parseInt(this.inputQauntidade.value);
        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(date, quantidade, valor) 
    }

    limpaForm(): void {
        this.inputData.value = '';
        this.inputQauntidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}