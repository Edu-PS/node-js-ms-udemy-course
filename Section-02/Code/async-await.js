// Es la forma mas moderna de trabajar con promesas.
// La palabra await lo que hace es que se espera en esa linea de codigo hasta que la promesa sea resuelta.
// La palabra async lo que hace es que una funcion se pueda utilizar dentro del bloque la palabra await 
    //y convierte esa funcion en una promesa.

/*************************************/
/***********  FUNCION SIN ASYNC ***************/
/*************************************/
// const fn1 = (txt, tiempo) => {
//     return new Promise((resolve, reject) => {
//         if (txt == 'SALIR') {
//             reject('Se sale del programa porque el texto fue: ' + txt)
//         } else {
//             console.log('Se procede a configurar el setTimeout con tiempo: ', tiempo, ' ms')
            
//             // DOS FORMAR DE DEVOLVER LA RESPUESTA
//             // setTimeout(() => {resolve('El texto enviado es: ' + txt)}, tiempo)
//             resolve(setTimeout(() => {'El texto enviado es: '}, tiempo))
//         }
//     })
// }

/*************************************/
/***********  FUNCION COMO ASYNC ***************/
/*************************************/
const fn1 = (txt, tiempo) => {
    if (txt == 'SALIR') {
        // Esto lanza un error para ser tomado por el catch externo donde se realiza el llamado al conjunto de fn1.
        throw('Se sale del programa porque el texto fue: ' + txt)
    } else {
        console.log('Se procede a configurar el setTimeout con tiempo: ', tiempo, ' ms')
        // Aqui se espera que se resuelva la promesa dentro del return para poder enviar la respuesta (el return)
        // al llamado de la funcion fn1 y continuar con el programa al siguiente punto afuera.
        return new Promise((resolve, reject) => setTimeout(() => {resolve('El texto enviado es: ' + txt)}, tiempo))
    }
}


async function f2 (){
    try {
        // Creo la variable donde guardo el resultado de la respuesta del llamado a fn1.
        let call1 = await fn1('Prueba 1', 1000) // Se usa la palabra await para esperar la respuesta.
        // Imprimo el resultado que me devuelve la funcion.
        console.log('Ejecutada sin error: ' + call1)

        // Llamo nuevamente la misma funcion con un segundo texto.
        call1 = await fn1('Segundo Await', 1000)
        // Imprimo el resultado que me devuelve la funcion.
        console.log('Ejecutada sin error: ' + call1)

        // Llamo la funcion, en  este caso al ser el texto SALIR entonces me devuelve un reject y entra al catch.
        call1 = await fn1('SALIR', 1000)
        console.log('No se ejecuta porque el texto que envie fue salir: ' + call1)
    }
    // Entra en este bloque si en algun lugar del try ocurre un error.
    catch (err) {
        console.log('Entro al catch por el error: ' + err)
    }
} 

// LLAMADO DE TODO EL PROGRAMA
f2()


async function f3 (num) {
    let va = await new Promise (resolve  => setTimeout(() => {
        resolve(console.log(num))}, 11500))
    return va
} 

async function f4 () {
    let test = await f3(35)
    console.log (test)
}

f4()