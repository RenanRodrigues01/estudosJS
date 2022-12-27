// declarando um array
const notas =[10, 6.5, 8, 7.5];
/* adicona um item a última posição
notas.push(5)
 remove o último elemnto do array
notas.pop()
                                                         length sempre traz o tamanho do array, neste caso 4
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);
console.log(notas);*/
/*--------------------------------------------------------------------------------------------------------------------*/
/*calculando média com o uso do for of
let somaDasNotas = 0;

for (let nota of notas){
    somaDasNotas += nota
}

const media = somaDasNotas / notas.length;

console.log(`A media final é ${media}`) */

let somaDasNotas = 0;

notas.forEach((nota) =>{
    somaDasNotas += nota
});

const media = somaDasNotas / notas.length;

console.log(`A media final é ${media}`);

