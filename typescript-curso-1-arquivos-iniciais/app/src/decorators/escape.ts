
export function escape(
    target: any,
    propertyKey: string,
    descripitor: PropertyDescriptor
) {
    const metodoOriginal = descripitor.value;
    descripitor.value = function (... args: any[]){
        let retorno = metodoOriginal.apply(this, args);
        if(typeof retorno === 'string'){
            retorno = retorno.replace(/<script>[\s\S]*?<script>/, '')
        }
        return retorno;
    }

    return descripitor
}