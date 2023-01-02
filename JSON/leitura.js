// recebe o arquivo JSON e tranforma em um objeto, trazedo todas as possibilidades de manipulação 
const data = require("./cliente.json"); 

console.log(data);

//dentro do ambiente node temos acesso a objeto global JSON
const clienteEmString = JSON.stringify(data);// transforma o objeto em string, facilitando o envio, fotmato muito usado em APIs
console.log(clienteEmString);

const objetoCliente = JSON.parse(clienteEmString);// da mesma forma podemos fazer a conversão de string para objeto
console.log(objetoCliente);
