// criando um decorator de propriedade, que recebe um seletor HTML
export function domInject( seletor: string ){
    //para um decorator de propriedade não precisamos do parametro descriptor
    return function(target: any, propertyKey: string) {

        let elemento: HTMLInputElement;// criamos um cash para que o elemento do DOM seja buscado uma unica vez
        const getter = function() {

            if(!elemento){// o teste garante que esse elemento vai ser buscado somente na primeira execuxão 
                elemento = <HTMLInputElement> document.querySelector(seletor)
            }

            return elemento// ao fim retornamos o elemento 
        }

        Object.defineProperty(//temos tres parametros essenciais
            target,// target: se refere ao prototype da classe que queremos modificar, nesse caso a negociacao-controller
            propertyKey,// com o propertyKey informamos qual propriedade da classe queremos modificar
            { get: getter}// em seguida informamos em que queremos tranformar, neste casso modificamos para um getter
        )

    }
}
/* O código acima é um decorator de propriedade, a função dele é nos poupar de buscar a mão cada elemento do DOM do nosso
formulario, escreendo muito menos linhas de código, e automatizando esse processo. Por meio do "Object.defineProperty"
podemos modificar uma propriedade de uma classe atraves da sua prototype, neste casso transformamos a prpriedade 
em um getter que retorna o elemento HTML */