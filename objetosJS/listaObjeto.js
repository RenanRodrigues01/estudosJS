const cliente = { 
    nome: "Renan",
    idade: 24,
    ativo: true,
    telefone: ["129817070", "40028922"]
}

cliente.enderecos = [//podemos fazer um array de objetos dentro do nosso objeto, imaginando que o nosso cliente tenha mais de um endereço
    { 
        rua: "casemiro de abreu",
        bairro: "morro do algodão",
        apartamento: false,
        complemento: "rua sem saida"
    }
]

//por se tratar de uma array podemos usar os propios metodos dele para fazer essa manipulação
cliente.enderecos.push(
    {
        rua: "AV jose herculano",
        bairro: "centro",
        apartamento: true,
        complemento: "ap 404"
    }
);

console.log(cliente); // se checarmos o objeto, vemos que agr temos uma lista de objetos dentro do nosso objeto

// usar os proprios metodos do array torna a busca por um objeto muito mais fácil
const enderecoFiltrado = cliente.enderecos.filter( (endereco) => endereco.apartamento === true );

console.log(enderecoFiltrado);
