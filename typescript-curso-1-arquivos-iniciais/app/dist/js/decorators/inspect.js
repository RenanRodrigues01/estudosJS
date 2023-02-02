export function inspect() {
    return function (target, propertyKey, descripitor) {
        const metodoOriginal = descripitor.value;
        descripitor.value = function (...args) {
            console.log(`--- Metodo: ${propertyKey}`);
            console.log(`----- Parametros: ${JSON.stringify(args)}`);
            const retorno = metodoOriginal.apply(this, args);
            console.log(`------- Retorno: ${JSON.stringify(retorno)}`);
            return retorno;
        };
        return descripitor;
    };
}
