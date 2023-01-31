export class Negociacao {
    constructor(
    //porem temos uma falha no código, por que o metodo Date tem seus proprios metodosque por sua vez podem alterar o valor da data mesmo depois de já declarada
    //public readonly _data: Date;
    _data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
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
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    /*Criando um metodo estatico, ele se torna um metodo da classe e não um metodo de uma instancia da classe,
    podendo ser ecessado sem a classe estar instanciada e em qualquer parte do código*/
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}
