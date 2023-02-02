/*Um decorator tem a função de sobrescreves o metodo que foi recebido, adicionando algum código de nossa preferencia
neste caso estamos calculando o tempo de execução de um metodo*/
export function tempoDeExecucao(emSegundos: boolean = false) {
    return function(
        target: any,
        propertyKey: string,
        descripitor: PropertyDescriptor
    ){

        const metodoOriginal = descripitor.value //como queremos manter todos os dados originais do metodo, guardamos o metodo original dentro de uma const
        let divisor = 1
        let unidade = "milisegundos"
        if(emSegundos){ // adicionando um parametro opicional, que tem um valor definido por padrão.
            divisor = 1000
            unidade = "segundos"
        }

        descripitor.value = function(...args: any[]){ //depois de termos guarado o valor original, podemos modificalo de acordo com o que queremos
            const t1 = performance.now(); // código que adicionamos

            const retorno = metodoOriginal.apply(this, args) // adiciona o metodo original(as linhas de código do metodo) e seu contexto usando o apply

            const t2 = performance.now(); // código que adicionamos
            console.log(`Metodo: ${propertyKey}, tempo de execução: ${(t2 - t1)/ divisor} ${unidade}`); // código que adicionamos

            retorno // fazemos o retorno do metodo, neste caso por se tratar de um retorno undefined, não usamos a sintaxe return
        }
        return descripitor
    }
}