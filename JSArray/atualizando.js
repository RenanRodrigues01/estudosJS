//tarefa: Remover Ana e caio da lista, e adicionar Rodrigo
const lista = ["João", "Ana", "Caio", "Lara", "Marjoie", "Leo"];
/* param1: a partir de qual indice vou remover, Ana está no inidce 1 do array
param2: quantos elemnetos quero remover, contando com o elemento do inidice indicado, no caso dois elementos Ana e caio
param3: o item que desejo adicionar a lista no caso Rodrigo  */
lista.splice(1, 2, "Rodrigo");

console.log(lista);
