import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController;
const form = document.querySelector(".form");

//fazendo a verificação de null do form, e tratando caso o valor o valor seja null
if(form) {
    form.addEventListener("submit", event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error("Não foi possível inicializar a aplicação. Verifique se o form existe")
}
