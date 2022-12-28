
const notas = [7, 8, 5];

/*por padrão o JS atrubui o valor 10 aos dois arrays "notas" e "notasAtualizadas",
por qustão de performace os dois arrays ocupam o mesmo espaço na memoria, sendo impossivel alterar um sem alterar o outro
*/
const novasNotas = notas;
novasNotas.push(10);

// spread operator = operador de espalhamento.
// faz a desistruturação do array dentro do novo array, quebrando qualquer vinculo entre eles
const notasAtualizadas = [...notas, 9]; //pode-se adicionar itens diretamnete no array
//notasAtualizadas.push(10);

console.log(`Novas notas: ${novasNotas}`);
console.log(`Notas atualizadas: ${notasAtualizadas}`);
console.log(`Notas originais: ${notas}`);// O 10 foi tambem adicionado ao array original