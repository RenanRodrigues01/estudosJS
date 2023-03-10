import { domInject } from "../decorators/domInject.js";
import { inspect } from "../decorators/inspect.js";
import { tempoDeExecucao } from "../decorators/tempo-de-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { negociacoesService } from "../services/negociacoes-service.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/mensagemView.js";
import { negocacoesView } from "../views/negociacoes-view.js";


export class NegociacaoController {
    @domInject('#data')
    private inputData: HTMLInputElement;
    @domInject('#quantidade')
    private inputQauntidade: HTMLInputElement;
    @domInject('#valor')
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new negocacoesView("#negociacoesView");
    private mensagemView = new MensagemView("#mensagemView");
    private negociacoesService = new negociacoesService()
    
//desta forma suprimimos o compilador, afirmamndo que o elemento sera um topo HTMLInputElement
    constructor () {
     /* this.inputData =<HTMLInputElement> document.querySelector("#data");
        this.inputQauntidade =<HTMLInputElement> document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor") as HTMLInputElement;
        apesar de existir as duas formas de declarar o tipo do elemento, neste caso o recomendado é <HTMLInputElement> */
        this.negociacoesView.update({ model: this.negociacoes });
    }
    
    
    public adiciona(): void {
// A lógica de conversão foi toda levada para dentro da classe Negociacao, para deixar o código mais legivel
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQauntidade.value,
            this.inputValor.value
        )

        if(!this.ehDiaUtil(negociacao.data)) {
            return this.mensagemView.update({ model: "Apenas operaçoes em dia útil são validas" })
        }
        imprimir(this.negociacoes, negociacao)
        this.negociacoes.adiciona(negociacao);
        this.limpaForm();
        this.atualizaView()
    }

    public importaDados(): void {
        this.negociacoesService.obterNegociacoesDoDia()
            .then( negociacoesAPI => {
                return negociacoesAPI.filter( negociacoesAPI => {
                    return !this.negociacoes.listar().some(Negociacao => Negociacao.ehIgual(negociacoesAPI))
                })
            })
            .then(negociacoesAPI => {
                for(let negociacao of negociacoesAPI ) {
                    this.negociacoes.adiciona(negociacao)
                }
                this.negociacoesView.update({ model: this.negociacoes })
            });
    }

    private ehDiaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO
    }

    private criaNegociacao(): Negociacao {
        const exp: RegExp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ","));
        const quantidade = parseInt(this.inputQauntidade.value);
        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(date, quantidade, valor);
    }

    private limpaForm(): void {
        this.inputData.value = '';
        this.inputQauntidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void {
        this.negociacoesView.update({ model: this.negociacoes });
        this.mensagemView.update({ model: "Negociação criada com sucesso" });
    }
}