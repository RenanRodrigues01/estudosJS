// declarando um obejeto. objetos sempre são declarados com {}, assim como os arrays são com []
const cliente ={ // o objeto é composto por chave e valor, chave nome, valor "Renan"
    nome: "Renan",
    idade: 24,
    cpf: "2525525200",
    email: "renan.dominio.com"
}

/*console.log(cliente); || retorna o objeto completo, com as chaves e tudo que esta dentro */

/*console.log(cliente.nome) || por meio do operador "." podemos acessar uma chave do objeto e ter como resposta seu valo */

console.log(cliente["nome"]) // também podemos acessar o valor de uma chave por meio de colchetes[], passando uma String como chave

// podemos ainda acessar metodos derivados de cada tipo dos valores, como o substring por o cpf ser uma string
console.log(`Cliente ${cliente.nome}, com os promeiros digitos do CPF ${cliente.cpf.substring(0, 3)}`)

/* o uso dos colchetes é comum em cenarios que nós não necessariamente sabemos as chaves que um objeto tem,
por exemplo: estamos recebendo as cahves como paremtro em formato de String, vindo de algum lugar do código ou componete */

const chaves = ["nome", "idade", "cpf", "email", "altuta"]; // caso seja passado uma chave que não exista o JS retorna o valor undefined 

chaves.forEach( (chave) => {
    console.log(`A chave ${chave} tem o valor: ${cliente[chave]}`);
})