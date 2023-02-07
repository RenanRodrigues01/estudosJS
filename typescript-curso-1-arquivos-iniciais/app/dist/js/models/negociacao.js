export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
    imprimeTexto() {
        return `
            Data: ${this.data}
            Quantidade: ${this._quantidade}
            Valor: ${this._valor}
        `;
    }
    ehIgual(negociacao) {
        return this.data.getDay() === negociacao.data.getDay()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear();
    }
}
