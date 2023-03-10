import { inspect } from "../decorators/inspect.js";
import { tempoDeExecucao } from "../decorators/tempo-de-execucao.js";

/*Crinado uma classe usando o tipo generics, para extnder seus metodos as filhas*/
export abstract class View<T> {
    /*criamos uma classe abstrata, para previnir a crição de uma instancia de view, já que a view está incompleta
    pois sem a filha implementar o metodo template, view só iria exibir um erro em run time  */

    protected elemento: HTMLElement;
    private escapar = false;
    //um paremetro opcional sempre deve ser pasado por ultimo 
    constructor(seletor: string) {
        //tratando os elementos null, e adicionando o erro caso seja null o valor
        const elemento = document.querySelector(seletor)
        if(elemento){
            this.elemento = <HTMLInputElement> elemento
        } else {
            throw Error(`O seletor ${seletor} não existe no DOM. Verifique`)
        }
        
    }

    /* criando um metodo abstrato, classe não define como o metodo será implementado mas sim a filha,
    sendo assim o metodo torna obrigatorio, e detectavel em tempo de desenvolvimento */
    protected abstract template(model: T): string;
    /* tranformando o metodo template em protected, para que só suas filhas tenham acesso ao metodo,
    por padrão os metodos são publicos, então ao instanciar um dos filhos teremos acesso ao metodo*/

    // @inspect no caso de decorators que não recebem parametro, não precisamos da '()' pois estamos passando o proprio decorator
    //@tempoDeExecucao(true)
    public update({ model }: { model: T; }) : void {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
