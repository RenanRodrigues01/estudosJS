export function tempoDeExecucao() {
    return function (target, propertyKey, descripitor) {
        const metodoOriginal = descripitor.value;
        descripitor.value = function (...args) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`Metodo: ${propertyKey}, tempo de execução: ${(t2 - t1) / 1000} segundos`);
            retorno;
        };
        return descripitor;
    };
}
