import { Negociacoes } from "../models/negociacoes.js";

export class negocacoesView {
    private elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)
    }

    template(lista: Negociacoes) : string {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>Quantidade</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
                ${lista.listar().map( (negociacao) =>{
                    return`
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                            <td>${negociacao._quantidade}</td>
                            <td>${negociacao._valor}</td>
                        </tr>
                    `;
                }).join("")}
            </tbody>
        </table>
        `;
    }

    update(lista: Negociacoes): void {
        const template = this.template(lista)
        this.elemento.innerHTML = template;
    }
}