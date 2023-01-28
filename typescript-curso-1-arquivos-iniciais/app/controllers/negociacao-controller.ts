import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagemView.js";
import { negocacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQauntidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new negocacoesView("#negociacoesView");
    private mensagemView = new MensagemView("#mensagemView")
    

    constructor () {
        this.inputData = document.querySelector("#data");
        this.inputQauntidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao()
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update("Negociação criada com sucesso")
        this.limpaForm()
    }

    criaNegociacao(): Negociacao {
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