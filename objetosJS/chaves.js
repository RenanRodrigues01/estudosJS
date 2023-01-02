const cliente = {
    nome: "Renan Rodrigues",
    idade: 24,
    telefone: "40028922",
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

const chavesObjeto = Object.keys(cliente) // esse metodo retorna um array com todas as chaves que já foram inicializadas dentro do objeto

console.log(chavesObjeto);

// sendo possivel fazer fazer alguns tipos de validaçoes ou outras operaçoes
if (!chavesObjeto.includes("enderecos")){
    console.error("Campo endereço obrigatorio")
}else{
    console.log("Cadastro completo")
}