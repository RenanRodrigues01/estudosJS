export class negocacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(lista) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>Quantidade</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
                ${lista.listar().map((negociacao) => {
            return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                            <td>${negociacao._quantidade}</td>
                            <td>${negociacao._valor}</td>
                        </tr>
                    `;
        }).join("")}
            </tbody>
        </table>
        `;
    }
    update(lista) {
        const template = this.template(lista);
        this.elemento.innerHTML = template;
    }
}
