// BIND()

/* 
Es un metodo que se utiliza para que se relacione la palabra this con el primer argumento que se pase a la funcion bind()
*/

// Creo una funcion que suma numeros pero utilizando variables a y b como parametros 
// y se llama con un bind() de un objeto creado afuera
function suma(a, b){
    return ((this.x * this.y ) + a + b) 
}

// const suma = (a, b) => { 
    // Esta no se puede definir como function arrow porque el this tiene un contexto desde donde se llama la funcion
    // sin importar como se llame, por lo que el bind no funciona.
    // ya que el this en una arrow function siempre será determinado por el contexto léxico en el que se creó la función

var obja = {x : 3, y : 5}
var objb = {x : 2, y : 9}

// Definiendo la funcion relacionada con el objb
console.log('Funcion suma llamada con bind(obja):', obja)

// var sum1 = suma.bind(obja, 2, 3)
const sum1 = suma.bind(obja, 2, 3)
console.log(sum1())
console.log(suma.bind(obja, 2, 3))


// Definiendo la funcion relacionada con el objb
// var sum2 = suma.bind(objb, 2, 3)
const sum2 = suma.bind(objb, 2, 3)
console.log('Funcion suma llamada con bind(objb):', objb)

console.log(sum2())
