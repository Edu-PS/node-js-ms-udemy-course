// DESTRUCTURING {nombres_exactos}
// Se utiliza para sacar elementos de un objeto o un array.

// Creando el objeto original.
let obj1 = {name: 'Pedro', age: 24}

// Extraigo el nombre del objeto original y lo guardo en la variable name del entorno global.
// Los nombres tienen que ser exactos como se describen en el objeto
let { name, color, age } = obj1

// Cambio el nombre al objeto original.
obj1.name = 'Luis'

console.log(name, color, age)
console.log(obj1.name)


// Creando el array original
let arr1 = ['Carlos', 'Maria']

// Extrayendo el contenido del array original. Los nombres pueden ser cualesquiera
const [elemento1, elemento2] = arr1
const [elemento3] = arr1

// Modificando el valor del array original


console.log(elemento1, elemento2)
console.log(elemento3)

console.log(arr1)
arr1[0] = 'Antonio'
console.log(arr1)
