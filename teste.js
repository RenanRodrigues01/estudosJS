function TreeConstructor(strArr) { 
    const contador = {};
    var arvoreValida;
    Object.values(strArr).forEach(value => {
        contador[value.split(',')[1][0]] = (contador[value.split(',')[1][0]] || 0) + 1;
    })

    Object.values(contador).forEach(value => {
        if(value >= 3){
            arvoreValida = false 
        } else {
            arvoreValida = true 
        }
    })
    return arvoreValida;
}

console.log(TreeConstructor( ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]))