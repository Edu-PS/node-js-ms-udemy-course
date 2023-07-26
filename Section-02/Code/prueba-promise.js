

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