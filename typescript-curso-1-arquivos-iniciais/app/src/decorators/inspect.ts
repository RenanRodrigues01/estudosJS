
export function inspect() {
    return function(
        target: any,
        propertyKey: string,
        descripitor: PropertyDescriptor
    ){
        const metodoOriginal = descripitor.value

        descripitor.value = function (...args: any[]){
            console.log(`--- Metodo: ${propertyKey}`)
            console.log(`----- Parametros: ${JSON.stringify(args)}`)

            const retorno = metodoOriginal.apply(this, args)

            console.log(`------- Retorno: ${JSON.stringify(retorno)}`)
            return retorno
        }

        return descripitor
    }
}