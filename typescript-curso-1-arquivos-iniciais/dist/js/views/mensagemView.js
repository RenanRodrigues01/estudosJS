import { View } from "./view.js";
//Ao herdar os metodos de uma classe com o tipo generics, assim que extendemos a classe precisamos declarar qual tipo sera usado
export class MensagemView extends View {
    /*como classe filha sobre escreve o pai, o metodo torna-se publico, sendo assim ao instanciar a filha o desenvolvedor tera acesso ao metodo*/
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
