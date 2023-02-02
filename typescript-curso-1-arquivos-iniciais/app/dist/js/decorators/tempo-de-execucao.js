export function tempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descripitor) {
        const metodoOriginal = descripitor.value;
        let divisor = 1;
        let unidade = "milisegundos";
        if (emSegundos) {
            divisor = 1000;
            unidade = "segundos";
        }
        descripitor.value = function (...args) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`Metodo: ${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unidade}`);
            retorno;
        };
        return descripitor;
    };
}
