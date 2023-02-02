/*Caso tenhamos certeza de que não precisaremos de parametros para usar dentro do nosso decorator
essa é a sintaxe que podemos abordar, exportamos diretamente a função do decorator*/
export function inspect(
    target: any,
    propertyKey: string,
    descripitor: PropertyDescriptor
){
    const metodoOriginal = descripitor.value;

    descripitor.value = function (...args: any[]) {
            console.log(`--- Metodo: ${propertyKey}`);
            console.log(`----- Parametros: ${JSON.stringify(args)}`);

            const retorno = metodoOriginal.apply(this, args);

            console.log(`------- Retorno: ${JSON.stringify(retorno)}`);
            return retorno;
        };

    return descripitor;
}