// levando em consideração que é uma lista de livros com seus preços, e na disposição estão todos desordenados
const livros = require("./listaLivros.json");

// função criada um metodo de ordenação de array do proprio JS, visto em algumas aulas passadas
function ordenaValor(lista, chave){
    const listaOrdenada = lista.sort( (a, b) => {
// metodo percorre o o array comparando os elementos e ordenando do menor para o maior 
        if(a[chave] < b[chave] ){
            return -1
        }
        if(a[chave] > b[chave]){
            return 1
        }
        return 0
    });
    return listaOrdenada;
}

const metodoSort = ordenaValor(livros, "valor");
console.log(metodoSort);

// também podemos acahar uma solução para guardar o menor valor dentro do array

let livroMaisBarato = 0;

//Os valores das variaveis se referem sempre ao indice do array
for(let atual = 0; atual < livros.length; atual++){
/*Condiçao faz a seguinte verificação: 
se o meu array na posição atual= 0 for menor que o meu array na na posição livroMaisBarato =0
então o minha variavel livroMaisbaroto é incrementada com +1, assim o looping faz a verificação de cada item do array */
    if( livros[atual].valor < livros[livroMaisBarato].valor){
      livroMaisBarato++
    }
}

console.log(`O livro ${livros[livroMaisBarato].titulo} é o mais barato com o preço: $${livros[livroMaisBarato].valor}`);