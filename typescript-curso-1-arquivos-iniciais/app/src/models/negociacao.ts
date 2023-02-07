import { Comparavel } from "../interfaces/comparavel.js";
import {imprimivel} from "../utils/imprimivel.js"

export class Negociacao implements imprimivel, Comparavel<Negociacao> {

    constructor(
//porem temos uma falha no código, por que o metodo Date tem seus proprios metodosque por sua vez podem alterar o valor da data mesmo depois de já declarada
        //public readonly _data: Date;
        private _data: Date,
        public readonly _quantidade: number, 
        public readonly _valor: number
    ){}

    /* o getter é feito para ter acesso acesso ao valor dentro da propriedade privada, para economizar um pouco de
    código podemos usar o readonly e deixar nossa declaração publica 
    
    get data(): Date {
        return this._data;
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor
    }*/
/*para cumpripr a proposta de ter um código imutavel, inves de passar a data que foi declarada na inicialização,
passamos uma copia, assim a data original fica imutavel. Isso é chamdo de Programação defensiva */
    get data(): Date {
        const data = new Date(this._data.getTime());
        return data
    }

    get volume(): number {
        return this._quantidade * this._valor
    }

/*Criando um metodo estatico, ele se torna um metodo da classe e não um metodo de uma instancia da classe, 
podendo ser ecessado sem a classe estar instanciada e em qualquer parte do código*/
    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp: RegExp = /-/g;
        const date = new Date(dataString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);

        return new Negociacao(date, quantidade, valor);
    }

    public imprimeTexto(): string {
        return `
            Data: ${this.data}
            Quantidade: ${this._quantidade}
            Valor: ${this._valor}
        `
    }

    public ehIgual(negociacao: Negociacao): boolean {
        return this.data.getDay() === negociacao.data.getDay()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear()
    }
}