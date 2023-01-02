const cliente = { // podemos armazenar mais de um tipo dentro de um objeto como um array e um boolean 
    nome: "Renan",
    idade: 24,
    ativo: true,
    telefone: ["129817070", "40028922"]
}

//console.log(cliente);
//console.log(cliente.telefone); || podemos acessar o valor da chave telefone e isso nos retorna o array 
//console.log(cliente.telefone[1]); || podemos usar todo tipo de manipulação que já conhecemos dos arrays, como laços de repetição e mais 

cliente.endereco = { // objetos podem guardar outros objetos 
    rua: "casemiro de abreu",
    bairro: "morro do algodão",
    complemento: "rua sem saida"
}

console.log(cliente);
console.log(cliente.endereco); // podemos acessar o objeto pela notação de ponto ou de colchetes: ["endereco"]
console.log(cliente.endereco["rua"]); // da mesma forma acessamos o objeto interno, por colchetes ou "." depende do contexto onde está sendo acessado