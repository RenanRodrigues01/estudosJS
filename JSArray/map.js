const notas =[10, 6.5, 8, 7.5];
// o metodo map não altera o array original
const novasNotas = notas.map( (nota) => {
/*usando os operadores ternarios para fazer uma condição, 
  nesse caso se a nota for maior ou igual a 10 eu retorno somente 10 se não for eu retorno a minha nota + 1*/
    return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(novasNotas);

const nomes = ['Jose alves', 'aline Barros', 'BIA silva'];

const nomesPadrao = nomes.map( (nome) => {
    return nome.toLowerCase();
});

console.log( nomesPadrao);