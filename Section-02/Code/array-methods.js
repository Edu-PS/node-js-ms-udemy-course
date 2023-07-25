var arr1 = [3, 5, 9]



console.log(arr1)

// SLICE - Devuelve un nuevo array de los elementos que se indiquen. Invluyendo el start (1) sin incluir el final (3)
console.log(arr1.slice(1, 3))

// MAP - Devuelve un arreglo con una funcion aplicada a cada uno de los elementos.
console.log('Llamando la funcion con nombre (el nombre no es ncesario): ', arr1.map(function multi(element) { return element * 2}))
console.log('Llamado con function sin nombre: ', arr1.map(function (element) { return element * 2}))
console.log('Llamando con arrow function: ', arr1.map( element => element * 2 ))

var obj12 = {z: 20}
var arr2 = ['Carlos', 'Andres']
console.log(arr2.map( element => 'Hola ' + element + '!'))
