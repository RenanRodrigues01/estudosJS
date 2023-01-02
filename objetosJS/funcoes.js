// podemos adicionar funçoes aos nossos objetos, funçoes que são chamadas de metodos 
const cliente = { 
    nome: "Renan",
    idade: 24,
    telefone: ["129817070", "40028922"],
    carteira: 200,
    efetuaPagamento : function(valor){
        if(valor > this.carteira){ // this representa a instancia que estamos, acessa oq já estamos dentro 
            console.log("saldo insuficiente");
        }else{
            this.carteira -= valor
            console.log(`Compra efetuada. Novo Saldo: ${this.carteira}`);
        }
    }
}

cliente.efetuaPagamento(150)
