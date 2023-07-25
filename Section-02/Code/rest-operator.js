// REST
    // Sirve para agrupar varios elementos en uno solo. 
    // Son los mismos tres puntos del spread pero esta vez es para unir elementos dentro de un arreglo y una variable nueva, en este caso args

const builArray = (...args) => {
    return args
}

console.log(builArray(2,3,4))
console.log(builArray('Carlos', 'Andres', 1, true))