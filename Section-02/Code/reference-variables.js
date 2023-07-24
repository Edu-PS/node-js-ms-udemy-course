// Variables por REFERENECIA
// arrays, functions, collections, and all other types of objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
// https://www.freecodecamp.org/news/primitive-vs-reference-data-types-in-javascript/

// Array
let arr1 = [1, 2, 3]

// Object
let obj1 = {
    id: 1,
    name: "Carlos",
    surname: "Perez",
    age: 24
}

// Realiza una copia completa elemento a elemento, no realiza puntero a la ubicacion de arr1.
let arr2 = arr1.slice()
// Se guarda un puntero a la ubicacion del arr1.
let arr3 = arr1
// Cambio del valor original
arr1[0] = 20

console.log()
console.log('Valor del Array original arr1: ', arr1)
console.log('Valor del Array copiado con Slice() antes de modificar arr1[0]: ', arr2)
console.log('Valor del Array utilizando el signo igual(=) y copiado antes de modificar arr1[0] :', arr3)
console.log()
