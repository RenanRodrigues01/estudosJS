import { escape } from "../decorators/escape.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

//Ao herdar os metodos de uma classe com o tipo generics, assim que extendemos a classe precisamos declarar qual tipo sera usado
export class negocacoesView extends View<Negociacoes> {
    
/*como classe filha sobre escreve o pai, o metodo torna-se publico, sendo assim ao instanciar a filha o desenvolvedor tera acesso ao metodo*/
    @escape
    protected template(model: Negociacoes) : string {

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
                ${model.listar().map( (negociacao) =>{
                    return`
                        <tr>
                            <td>${this.dataSet(negociacao.data)}</td>
                            <td>${negociacao._quantidade}</td>
                            <td>${negociacao._valor}</td>
                        </tr>
                    `;
                }).join("")}
            </tbody>
        </table>
        `;
    }

/* criando um metodo privado, para deixar a formatação de data externa, e pra que o desenvolvedor não tenha acesso a esse metodo
ao instanciar um new negociacoesView, o objetvo é que tenha caesso apenas ao metodo update que vai atualizar as informaçoes */
    private dataSet (data: Date): string {
        return new Intl.DateTimeFormat().format(data)
    }

}