// estamos recebendo um array que contem objetos
const data = require("./listaClientes.json");

function encontarCliente (lista, chave, valor){
    return lista.find( (item) => item[chave].includes(valor))
/*por se tratar de um objeto podemos usar os metodos já conhecidos para encontar algum determinado objeto
-lista.find(): responsavel por varerr todo o array e encontrando cada obejeto
-a função de callback (item) corresponde ao objeto atual que está sento percorrido
-item[chave] procura se dentro daquele objeto existe uma chave correspondente
-includes(valor) verifica se aquele valor está incluso naquele obejo, o metodo includes aceita string como um parametro  */
    
}

// para a função passamos a lista qual queremos percorrer a chave que queremos procurar e o valor que queremos encontar
const res = encontarCliente(data, "nome", "Stephine");
const res2 = encontarCliente(data, "email", "xandrieuxh@berkeley.edu");

console.log(res);
console.log(res2);