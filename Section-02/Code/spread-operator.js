
// SPREAD (tres puntos ...)
    // Se utiliza para separar cada elemento de un array u objeto y realizar una copia elemento por elemento.


// SIN USAR SPREAD
let arr1 = [1, 2, 3, 4]
// Realizando una copia mal hecha
let arr2 = arr1
arr1[0] = 22
console.log()
console.log('Array original despues de modificar arr1[0] = 22: ',arr1)
console.log('Array copiado despues de modificar arr1[0] = 22: ',arr2)
console.log('Tienen el mismo valor en el elemento cero a pesar que se copio arr2 = arr1 antes de ser cambiando su valor')
console.log()


// USANDO EL SPREAD
let arr3 = [11, 22, 33]
let arr4 = [...arr3]
arr3[0] = 55

console.log()
console.log('Array original despues de modificar arr3[0] = 55: ',arr3)
console.log('Array copiado despues de modificar arr3[0] = 55: ',arr4)
console.log('Mantiene su valor original (11) ya que se copio con el spread operator ...')
console.log()

let age = 33;
var obj1 = {name: 'Carlos', age: 55, color: 'Rojo'}
console.log(age)
let car, color
var obj2 = {...obj1}
console.log(obj2.age)




