/*Crinado uma classe usando o tipo generics, para extnder seus metodos as filhas*/
export abstract class View<T> {
/*criamos uma classe abstrata, para previnir a crição de uma instancia de view, já que a view está incompleta
pois sem a filha implementar o metodo template, view só iria exibir um erro em run time  */

    protected elemento: HTMLElement;
    private escapar = false;
//um paremetro opcional sempre deve ser pasado por ultimo 
    constructor(seletor: string, escapar?: boolean) {
//fazendo a reatribuição caso o parametro opicional seja passado
        this.elemento = document.querySelector(seletor);
        if(escapar){
            this.escapar = escapar
        }
    }

/* criando um metodo abstrato, classe não define como o metodo será implementado mas sim a filha,
sendo assim o metodo torna obrigatorio, e detectavel em tempo de desenvolvimento */
    protected abstract template(model: T): string;
/* tranformando o metodo template em protected, para que só suas filhas tenham acesso ao metodo 
por padrão os metodos são publicos, então ao instanciar um dos filhos teremos acesso ao metodo*/

    public update(model : T) : void {
        let template = this.template(model);
//logica para prvenir um iject malicioso no nosso template, o regex identifica qualquer tag script e a remove
        if(this.escapar){
            template =template.replace(/<script>[\s\S]*?<script>/, '')
        }
        this.elemento.innerHTML = template;
    }
}
