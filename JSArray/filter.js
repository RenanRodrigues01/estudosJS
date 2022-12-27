const alunos = ['maria', 'Jose', 'Anderson', 'Ana'];
const medias = [7, 5.5, 8, 10];

// primeiro parametro se refere ao elemento e o segundo ao indice, caso não usemos o primeiro parametro pode-se colocar '_' no lugar
const listaReprovados = alunos.filter( (_, indice) => {
// metodo filter sempre retona true ou false, qundo o retorno do callback é true adiciona o item no novo array, caso contrario não
   return medias[indice] < 7
});

console.log(listaReprovados);