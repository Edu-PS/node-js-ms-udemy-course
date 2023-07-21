// Variables PRIMITIVAS

// Number
let int1 = 24

// Bool
let bool1 = true

// Strng
let txt1 = "Carlos"

// Undefined
let und1;
console.log(typeof(und1));

// Symbol
//  LEER MAS

// bigint
// NO SE COMO REPRESENTARLO


// Copia de variables
console.log(`Valor ante de cambiar: `, int1)
// Creando la nueva variable y copiando el valor de la anterior.
let int2 = int1;
int1 = 34;
console.log(`Valor despues de cambiar: `, int1);
console.log(`Valor de la nueva variable copiada antes de cambiar: `, int2);

