// criando uma lista de duas dimensões e acessando os elemetos nela

const alunos = ['João', 'Juliana', 'Caio', 'Rodrigo'];
const notas = [10, 8, 7.5, 5.5];

// cria um array que contem outros dois arrays
const listaDuasDimensoes = [alunos, notas];
console.log(listaDuasDimensoes);

/*O primeiro [] se refere a qual lista dentro do array quero acessar, 
neste caso a lista alunos ocupa o indice 0 e as notas o indice 1 */
console.log(`O aluno(a) ${listaDuasDimensoes[0][2]}, teve a média de ${listaDuasDimensoes[1][2]}`);
/*Já o segundo [] se refere ao inidice interno da lista  */