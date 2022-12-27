// declarando um array
const notas =[10, 6.5, 8, 7.5];
// adicona um item a última posição
notas.push(5)
                                                        // length sempre traz o tamanho do array, neste caso 4
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);
console.log(notas);