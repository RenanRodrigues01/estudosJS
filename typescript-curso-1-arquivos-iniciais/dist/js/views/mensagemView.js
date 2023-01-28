import { View } from "./view.js";
//Ao herdar os metodos de uma classe com o tipo generics, assim que extendemos a classe precisamos declarar qual tipo sera usado
export class MensagemView extends View {
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
