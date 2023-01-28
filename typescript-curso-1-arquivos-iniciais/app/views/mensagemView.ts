import { View } from "./view.js";
//Ao herdar os metodos de uma classe com o tipo generics, assim que extendemos a classe precisamos declarar qual tipo sera usado
export class MensagemView extends View<string> {
   
    template(model: string): string {
        return`
            <p class="alert alert-info">${model}</p>
        `
    }

    update(model : string) : void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}