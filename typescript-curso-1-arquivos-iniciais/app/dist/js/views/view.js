export class View {
    constructor(seletor) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`O seletor ${seletor} não existe no DOM. Verifique`);
        }
    }
    update({ model }) {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
