/*Crinado uma classe usando o tipo generics, para extnder seus metodos as filhas*/
export abstract class View<T> {
/*criamos uma classe abstrata, para previnir a crição de uma instancia de view, já que a view está incompleta
pois sem a filha implementar o metodo template, view só iria exibir um erro em run time  */

    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)
    }

/* criando um metodo abstrato, classe não define como o metodo será implementado mas sim a filha,
sendo assim o metodo torna obrigatorio, e detectavel em tempo de desenvolvimento */
    protected abstract template(model: T): string;
/* tranformando o metodo template em protected, para que só suas filhas tenham acesso ao metodo 
por padrão os metodos são publicos, então ao instanciar um dos filhos teremos acesso ao metodo*/

    update(model : T) : void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
