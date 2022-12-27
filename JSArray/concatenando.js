//Tarefa junstar duas listas diferentes em uma só 

const lista1 = ['João', 'Juliana', 'Ana', 'Caio', 'Lara'];

const lista2 = ['Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre'];

//concatena dois arrays retornando um outro. a ordem da chmada importa, por exemplo lista2.concat(lista1), o resultado seria invertido
const listas = lista1.concat(lista2);

console.log(listas);