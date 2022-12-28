const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

const mediaSalaJS = calculaMedia(salaJS)
const mediaSalaJava = calculaMedia(salaJava)
const mediaSalaPython = calculaMedia(salaPython)


function calculaMedia(sala){
/* Reduce rece dois parametros uma calback que tem um acumulador e o valor do elemento iteirado, 
   e o valor de inicialização desse acumulador, no fim o reduce retorna a soma de todos os elementos dentro do array */
    const somaDasNotas = sala.reduce( (acc, nota) => acc + nota , 0);
    const media = somaDasNotas / sala.length

    return media
}

console.log(`A media da sala JavaScript foi ${mediaSalaJS}`);
console.log(`A media da sala Java foi ${mediaSalaJava}`);
console.log(`A media da sala Python foi ${mediaSalaPython}`);