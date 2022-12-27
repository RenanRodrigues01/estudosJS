const alunos = [
    'João', 
    'Juliana', 
    'Ana', 
    'Caio', 
    'Lara', 
    'Marjorie', 
    'Guilherme', 
    'Aline', 
    'Fabiana', 
    'Andre', 
    'Carlos', 
    'Paulo', 
    'Bia', 
    'Vivian', 
    'Isabela', 
    'Vinícius', 
    'Renan', 
    'Renata', 
    'Daisy', 
    'Camilo'
];

//slice= fatiamento, primeiro parametro é onde começa a divisão e o segundo quantos itens vão divididos, neste caso vai do indice 0 ao 9
//metodo não altera o array original, ele gera um novo 
const sala1 = alunos.slice(0, alunos.length / 2)
// não precisa de um segundo parametro pois no caso vamos pegar do indice 10 até o fim do array
const sala2 = alunos.slice(alunos.length / 2)

console.log(sala1);
console.log(sala2);