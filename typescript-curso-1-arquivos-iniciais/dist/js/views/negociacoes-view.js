import { View } from "./view.js";
export class negocacoesView extends View {
    template(model) {
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
                ${model.listar().map((negociacao) => {
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
}
