const data = require("./listaClientes.json");

//Função responsavel por ordenar uma lista, por se tratar de um array de objetos podemos usar o metodo sort()
//O primeiro parametro e a lista qual queremos ordenar, o segundo é a chave do objeto, o metodo faz a ordenação a partir do valor que está dentro da chave
function ordena(lista, prop) {
// os retornos positivos e negativos são requisitos do proprio metodo sort()
    const novaLista = lista.sort( (a, b) => {
        if(a[prop] < b[prop]){
            return -1;
        }
        if(a[prop] > b[prop]){
            return 1;
        }
        return 0
    })

    return novaLista
}

// A ordem vem de acordo com a chave que queremos verificar, nesse caso a chave "nome"
const listaOrdenada = ordena(data, "nome");

console.log(listaOrdenada)