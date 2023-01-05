const livros = require("./listaLivros.json");
const menorValor = require("./menorValor.js");

for(let atual = 0; atual < livros.length; atual++){
    let menor = menorValor(livros, atual);

    console.log('posição atual', atual);

    let livroAtual = livros[atual];
    console.log('livro atual', livros[atual]);

    let livroMenorPreço = livros[menor];
    console.log('livro menor preço', livros[menor], 'indice', menor);

    livros[atual] = livroMenorPreço;
    livros[menor] = livroAtual;
}

console.log(livros);

