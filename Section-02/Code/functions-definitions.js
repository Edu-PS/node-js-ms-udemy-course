// Funcion con nombre
function f1(par1, par2){
    // Bloque de funciones
    return par1 + par2
};

// Funcion con nombre y asignado a una variable
const f2 = function (par1, par2) {
    // Bloque de codigo
    return par1 + par2
};

// Funcion con flecha sin nombre y asignando a una variable
const f3 = (par1, par2) => {
    //Bloque de codigo
    return par1 + par2
};

/*
Si la funcion flecha tiene un solo parametro se puede escribir sin el parentesis y 
si es una sola linea de bloque de codigo se puede utilizar sin el return
*/
const f4 = par1 => par1**2;
const f5 = (par1) => par1**2;

let a = 2;
let b = 3;

console.log(`La suma de a=${a} y b=${b} es:`, f1(2,3));
console.log(`La suma de a=${a} y b=${b} es:`, f2(a, b));
console.log(`La suma de a=${a} y b=${b} es:`, f3(a, b));
console.log(`El cuadrado de b=${b} es:`, f4(b));
console.log(`El cuadrado de b=${b} es:`, f5(b));

