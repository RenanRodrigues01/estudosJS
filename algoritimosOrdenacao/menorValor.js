// levando em consideração que é uma lista de livros com seus preços, e na disposição estão todos desordenados
//const livros = require("./listaLivros.json");

function encontraMenorValor (lista, posicao){
    let livroMaisBarato = posicao;

    for(let atual = posicao; atual < lista.length; atual++){
    
        if( lista[atual].valor < lista[livroMaisBarato].valor){
          livroMaisBarato = atual
        }
    }
    return livroMaisBarato  
}

module.exports = encontraMenorValor

// podemos acahar uma solução para achar o menor valor dentro do array
/*let livroMaisBarato = 0;

||Os valores das variaveis se referem sempre ao indice do array
for(let atual = 0; atual < livros.length; atual++){
    ||Condiçao faz a seguinte verificação: 
        se o meu array na posição atual= 0 for menor que o meu array na na posição livroMaisBarato =0
        então o minha variavel livroMaisbaroto é incrementada com +1, assim o looping faz a verificação de cada item do array
    if( livros[atual].valor < livros[livroMaisBarato].valor){
      livroMaisBarato++
    }
}

console.log(`O livro ${livros[livroMaisBarato].titulo} é o mais barato com o preço: $${livros[livroMaisBarato].valor}`);*/