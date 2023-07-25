// Codigo sincrono es aquel que se ejecuta al instante de haberse leido por el interprete.
console.log('Hola...!') // Este es un codigo sincrono

// Codigo Asincrono es aquel que se ejecuta posteriormente con alguna accion o retardo.
setTimeout(
    () => console.log('Codigo ASINCRONO'), 200
)

// Codigo sincorno que se ejecuta antes del timeout
console.log('Hola de nuevo...!') // Este es un codigo sincrono



// const func3 = () => console.log('Func3')

// const func2 = cb => {
//     console.log('func2 ejecutada');
//     cb();
// }

// const func1 = () => {
//     console.log('func1 ejecutada');
//     setTimeout(func2, 1500, func3);
// }


// setTimeout(func1, 2000);

const fun = () => {
    console.log('Ejecutado el codigo por el llamado a la siguiente funcion y preparado el siguiente timeout de 1500')
    setTimeout(() => {console.log('Ejecutado el codigo despues de los 1500')}, 1500)
}

setTimeout(
    () => {
        console.log('ejecutado el codigo despues de los 2000 y llamando de inmediato a la siguiente funcion');
        fun();
    }
    , 2000)



