export function escape(target, propertyKey, descripitor) {
    const metodoOriginal = descripitor.value;
    descripitor.value = function (...args) {
        let retorno = metodoOriginal.apply(this, args);
        if (typeof retorno === 'string') {
            retorno = retorno.replace(/<script>[\s\S]*?<script>/, '');
        }
        return retorno;
    };
    return descripitor;
}
