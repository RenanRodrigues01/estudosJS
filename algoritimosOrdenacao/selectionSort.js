const livros = require("./listaLivros.json");
const menorValor = require("./menorValor.js");

for(let atual = 0; atual < livros.length; atual++){
    let menor = menorValor(livros, atual);

    console.log('posição atual', atual);
//verica qual é o item atual que está sendo percorrido
    let livroAtual = livros[atual];
    console.log('livro atual', livros[atual]);
//guarda qual é o item que tem o menor valor 
    let livroMenorPreço = livros[menor];
    console.log('livro menor preço', livros[menor], 'indice', menor);
//troca as posições do array, o inidice atual recebe o livro de menor valor, e o indice onde o menor livro estava recebe o livro atual 
    livros[atual] = livroMenorPreço;
    livros[menor] = livroAtual;
}

console.log(livros);
/*      ---------------------||--------------------||-------------------------||-------------------------
exeuta a mesma função criada a cima, mas este é um metodo pronto, que o proprio JS oferece
porem segue a mesma logica criada nas duas funções utilizadas 
*/
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