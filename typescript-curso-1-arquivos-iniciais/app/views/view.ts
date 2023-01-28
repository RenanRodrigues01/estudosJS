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
    abstract template(model: T): string;


    update(model : T) : void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
