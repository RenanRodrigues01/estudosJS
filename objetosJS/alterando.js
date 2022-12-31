const pessoa ={ 
    nome: "Renan",
    idade: 24
}

console.log(pessoa.cpf); // se tentarmos acessar uma chave que não existe o JS retorna a palavra reservada undefined

pessoa.cpf = "25255252" // podemos fazer a atribuição de uma nova chave e valor 
console.log(pessoa.cpf);

pessoa.nome = "Renan Rodrigues"
console.log(pessoa.nome); // também podemos atualizar algum campo já existente

console.log(pessoa);

// por se tratar de uma variavel constante não podemos fazer uma retribuição direta de um outro objeto, por exemplo:
const pessoa2 = {
    nome: "zezinho"
}
pessoa = pessoa2;
console.log(pessoa);

