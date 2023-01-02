const cliente = {
    nome: "Renan Rodrigues",
    idade: 24,
    telefone: "40028922",
    cpf: "52522525",
}

// imaginando que esse que não temos acesso a esse objeto, ou ele está vindo de alguma outra parte do código
// podemos percorre-lo para acessar suas chaves e valores

for (let chave in cliente){
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
}