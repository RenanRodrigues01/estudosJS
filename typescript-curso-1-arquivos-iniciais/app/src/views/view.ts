import { tempoDeExecucao } from "../decorators/tempo-de-execucao.js";

/*Crinado uma classe usando o tipo generics, para extnder seus metodos as filhas*/
export abstract class View<T> {
/*criamos uma classe abstrata, para previnir a crição de uma instancia de view, já que a view está incompleta
pois sem a filha implementar o metodo template, view só iria exibir um erro em run time  */

    protected elemento: HTMLElement;
    private escapar = false;
//um paremetro opcional sempre deve ser pasado por ultimo 
    constructor(seletor: string, escapar?: boolean) {
        //tratando os elementos null, e adicionando o erro caso seja null o valor
        const elemento = document.querySelector(seletor)
        if(elemento){
            this.elemento = <HTMLInputElement> elemento
        } else {
            throw Error(`O seletor ${seletor} não existe no DOM. Verifique`)
        }
        
        if(escapar){
            //fazendo a reatribuição caso o parametro opicional seja passado
            this.escapar = escapar
        }
    }

/* criando um metodo abstrato, classe não define como o metodo será implementado mas sim a filha,
sendo assim o metodo torna obrigatorio, e detectavel em tempo de desenvolvimento */
    protected abstract template(model: T): string;
/* tranformando o metodo template em protected, para que só suas filhas tenham acesso ao metodo 
por padrão os metodos são publicos, então ao instanciar um dos filhos teremos acesso ao metodo*/

    @tempoDeExecucao()
    public update(model : T) : void {
        let template = this.template(model);
//logica para prvenir um iject malicioso no nosso template, o regex identifica qualquer tag script e a remove
        if(this.escapar){
            template =template.replace(/<script>[\s\S]*?<script>/, '')
        }
        this.elemento.innerHTML = template;
    }
}
