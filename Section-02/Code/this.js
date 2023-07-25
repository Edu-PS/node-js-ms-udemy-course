// Creando el primer objeto.
var obj1 = {
    name: 'Luis',
    age: 36
}

// Creando una funcion de referencia
function getAge (){
    return this.age
}

// Creo la funcion de cambiar la edad Age
function setAge(age){
    this.age = age
}

// Creando una funcion que retorna el color
function getColor () {
    return this.color
}

// Agrego un metodo al obj1 llamado f
obj1.f = getAge

// Imprimo por pantalla.
console.log(obj1.f())

// Agrego un nuevo objeto dentro de obj1 y lo llamo obj2
obj1.obj2 = {name: 'Carlos', age: 66}

// Le agrego al objeto dentro de obj1 la funcion
obj1.obj2.f = getAge

// Imprimo la edad del obj2 dentro del obj1, ya que es a este objeto que hace referencia el this dentro de la funcion getAge.
console.log(obj1.obj2.f())

// Definiendo una nueva funcion a obj2 dentro de obj1.
obj1.obj2.g = setAge;

// Llamando a la funcion creada del obj2 dentro de obj1.
obj1.obj2.g(44)

console.log(obj1.obj2.f())

// Agregando una propiedad llamada color a obj1.
obj1.color = 'Rojo'

// Agregando la funcion getColor a obj1.
obj1.getColor = getColor

// Agregando la funcion getColor a obj1.obj2.
obj1.obj2.getColor = getColor

// Llamando a una propiedad que no tiene el obj2 dentro de obj1. Por eso imprime undefined
console.log(obj1.obj2.color)

// Llamando a la funcion getColor del obj1.
console.log('Obteniendo el color de obj1: ', obj1.getColor())

// Llamando a la funcion getColor del obj1.obj2.
console.log('Obteniendo el color de obj1.obj2: ', obj1.obj2.getColor())


// Llamando a la definicion de la funcion getColor del obj1.
console.log('Obteniendo la definicion de getColor de obj1: ', obj1.getColor)



// Imprimpiendo los objetos.
console.log('Obj1: ', obj1)
console.log('Obj2:', obj1.obj2)

