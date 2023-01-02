const data = require("./listaClientes.json");

// função que verifica quais clientes moram em apartemento mas não colocaram o complemento
function clienteSemComplemento(lista){
//usando o metodo filter por se tratar de um array de obejtos 
    return lista.filter( (cliente) =>{
        return (
            
//primeira condição verifica se o campo apartamento está marcado como true, por ja ser um boolean não precisamos do === true
            cliente.endereco.apartamento && 
            !cliente.endereco.hasOwnProperty("complemento")
//segunda condição usa um metodo proprio do objeto, para verificar se aquela propriedade ou chave foi inicializada 
        );
    })
}

const res = clienteSemComplemento(data);
console.log(res)