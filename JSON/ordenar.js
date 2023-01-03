const data = require("./listaClientes.json");

function ordena(lista, prop) {
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


const listaOrdenada = ordena(data, "nome");

console.log(listaOrdenada)