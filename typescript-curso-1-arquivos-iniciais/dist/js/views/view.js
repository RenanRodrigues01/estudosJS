/*Crinado uma classe usando o tipo generics, para extnder seus metodos as filhas*/
export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    /* tranformando o metodo template em protected, para que só suas filhas tenham acesso ao metodo
    por padrão os metodos são publicos, então ao instanciar um dos filhos teremos acesso ao metodo*/
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
