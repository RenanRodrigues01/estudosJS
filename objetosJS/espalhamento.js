const cliente = {
    nome: "Renan Rodrigues",
    idade: 24,
    telefone: ["40028922", "12981707070"],
    cpf: "52522525",
}

cliente.enderecos = [
    { 
        rua: "casemiro de abreu",
        bairro: "morro do algodão",
        apartamento: false,
        complemento: "rua sem saida"
    }
]

// imaginando que esta seja uma função externa ao nosso código temos que penar na melhor forma de mandar os parametros
function ligarCliente(phone1, phone2){
    console.log(`ligando para ${phone1}`);
    console.log(`ligando para ${phone2}`)
}

//este seria o jeito mais convencional, mas muito trabalhoso, pois caso o cliente tivesse mais numeros iamos ter que escrever
ligarCliente(cliente.telefone[0], cliente.telefone[1]);

//usando a sintaxe de espalhamento ou espred, o array de telefone e esplahano nos paremtros e o proprio JS se encarrega de passalos
ligarCliente(...cliente.telefone);

/*outra situação seria se eu precisase de campos especificos do meu objeto como por exemplo para uma encomenda
precisariamos do nome do cliente e outros dados como o objeto endereço dentro do cliente */

const dadosEntrega = {
    nome: cliente.nome,
    cpf: cliente.cpf,
    ...cliente.enderecos[0]
 //espalha o objeto que esta na chave enderecos na posição 0 do array, criando automaticamente as chaves e valores 
}

console.log(dadosEntrega); // cria um objeto não aninhado 