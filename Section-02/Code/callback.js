/*************************************/
/***********  CALLBACK ***************/
/*************************************/
// Una funcion callback es una funcion que se pasa como argumento a otra funcion.

// Definiendo una funcion
const f_cback1 = (txt) => {
    console.log(txt)
}

// Ejemplo con setTimeout(function_callback, time_to_wait, args_Of_function)
// Paso la funcion f_cback1 para ser ejecutada despues de transcurrido el tiempo.
setTimeout(f_cback1, 2000,'Primer setTimout')


/*************************************/
/***  CODIGO SINCRONO - ASINCRONO ****/
/*************************************/
// Codigo sincrono es aquel que se ejecuta al instante de haberse leido por el interprete.
console.log('Hola...!') // Este es un codigo sincrono

// Codigo Asincrono es aquel que se ejecuta posteriormente con alguna accion o retardo.
setTimeout(
    () => console.log('Codigo ASINCRONO'), 200
)

// Codigo sincorno que se ejecuta antes del timeout
console.log('Hola de nuevo...!') // Este es un codigo sincrono


/*************************************/
/***  ANIDADO DE FUNCIONES  **********/
/*************************************/
// Se realiza una funcion y luego se llama a la siguiente, esto se ve mejor utilizando promesas.
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
