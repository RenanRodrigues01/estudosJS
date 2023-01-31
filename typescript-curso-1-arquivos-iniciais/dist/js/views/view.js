/*Crinado uma classe usando o tipo generics, para extnder seus metodos as filhas*/
export class View {
    //um paremetro opcional sempre deve ser pasado por ultimo 
    constructor(seletor, escapar) {
        this.escapar = false;
        //fazendo a reatribuição caso o parametro opicional seja passado
        this.elemento = document.querySelector(seletor);
        if (escapar) {
            this.escapar = escapar;
        }
    }
    /* tranformando o metodo template em protected, para que só suas filhas tenham acesso ao metodo
    por padrão os metodos são publicos, então ao instanciar um dos filhos teremos acesso ao metodo*/
    update(model) {
        let template = this.template(model);
        //logica para prvenir um iject malicioso no nosso template, o regex identifica qualquer tag script e a remove
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
