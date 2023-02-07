var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInject } from "../decorators/domInject.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { negociacoesService } from "../services/negociacoes-service.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/mensagemView.js";
import { negocacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new negocacoesView("#negociacoesView");
        this.mensagemView = new MensagemView("#mensagemView");
        this.negociacoesService = new negociacoesService();
        this.negociacoesView.update({ model: this.negociacoes });
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQauntidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            return this.mensagemView.update({ model: "Apenas operaçoes em dia útil são validas" });
        }
        imprimir(this.negociacoes, negociacao);
        this.negociacoes.adiciona(negociacao);
        this.limpaForm();
        this.atualizaView();
    }
    importaDados() {
        this.negociacoesService.obterNegociacoesDoDia()
            .then(negociacoesAPI => {
            return negociacoesAPI.filter(negociacoesAPI => {
                return !this.negociacoes.listar().some(Negociacao => Negociacao.ehIgual(negociacoesAPI));
            });
        })
            .then(negociacoesAPI => {
            for (let negociacao of negociacoesAPI) {
                this.negociacoes.adiciona(negociacao);
            }
            this.negociacoesView.update({ model: this.negociacoes });
        });
    }
    ehDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ","));
        const quantidade = parseInt(this.inputQauntidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limpaForm() {
        this.inputData.value = '';
        this.inputQauntidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update({ model: this.negociacoes });
        this.mensagemView.update({ model: "Negociação criada com sucesso" });
    }
}
__decorate([
    domInject('#data')
], NegociacaoController.prototype, "inputData", void 0);
__decorate([
    domInject('#quantidade')
], NegociacaoController.prototype, "inputQauntidade", void 0);
__decorate([
    domInject('#valor')
], NegociacaoController.prototype, "inputValor", void 0);
