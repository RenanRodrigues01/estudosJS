// declarando um array com elementos repetidos
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
/* Set é uma classe do JavaScript que tem algumas funcionalidades por padrão,
como não armazenar valores repetidos

const meuSet = new Set(nomes); atribuo um novo Set a minha variavel 
const nomesPadrao = [...meuSet]; faz a dessitruturação do set atribuindo os valores ao novo array
*/

const nomesPadrao = [...new Set(nomes)];// faz a atrubuição do Set e a desistruturação dentro do array de maneire simples

//console.log(meuSet);
console.log(nomesPadrao);