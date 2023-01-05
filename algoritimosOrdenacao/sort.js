const livros = require("./listaLivros.json");
const menorValor = require("./menorValor.js");

for(let atual = 0; atual < livros.length; atual++){
    menorValor(livros, atual);
}