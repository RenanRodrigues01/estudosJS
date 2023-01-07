const data = require("./listaLivros.json");

// função responsável por ordenar uma lista do menor para o maior valor 
function insertionSort (lista) {
    for(let atual = 0; atual < lista.length; atual++){
//Variável de controle usada para acessar o indice atual do array referente ao loop
        let indiceAtual = atual
//condição verifica se o item que esta sendo percorrido é menor que anterior, se sim a troca de posição é feita
        while (indiceAtual > 0 && lista[indiceAtual].valor < lista[indiceAtual - 1].valor){
//se a condição a cima for true, significa que o meu item atual que sendo percorrido é menor que anterior 
            let itemAtual = lista[indiceAtual];
            let itemAnterior = lista[indiceAtual - 1];
//então a troca de posição é feita, o item do indice atual recebe o item anterior do indice anterior 
            lista[indiceAtual] = itemAnterior;
//e o item que estava na posição atual vai para o indice anterior
            lista[indiceAtual - 1] = itemAtual;
//a variável de controle é decrementada dentro do while, para continar a cerificação de tras para frente até a condição ser false
            indiceAtual--
        }
    }

    console.log(lista);
}

insertionSort(data);