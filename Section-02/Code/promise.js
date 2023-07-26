// DEFINIENDO UNA FUNCION DE GENERAR NUMEROS ALEATORIOS
function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

/*************************************/
/***********  PROMISES ***************/
/*************************************/
// Una promesa es una funcion que por lo general tiene un tiempo de retardo en su ejecucion y entregar un resultado
// que puede ser resuelta (satisfactoriamente) o rechazada y que se ejecuta un codigo dependiendo de la resolucion.

const promise1 = () => {
    return new Promise((resolve, reject) => {
        // Aqui va el codigo que determina si la promesa fue resuelta o rechazada
        let nro = random(1,10)
        if (nro == 1) {
            reject('Promesa Rechazada, el numero enviado fue ' + nro)
        } else {
            resolve('Resuelta satisfactoriamente, numero es igual a ' + nro)
        }
    })
}

const nuevaPromise = () => {
    return new Promise( resolve => {
        resolve(promise1())
    })
}

/*************************************/
/***** ENCADENANDO PROMISES **********/
/*************************************/
promise1()
    .then(
        result => {
            console.log(result)
            return promise1()
    })
    .then(
        result => {
            console.log('Llamando a nuevaPromise, resultado anterior -> ' + result)
            return nuevaPromise()
    })
    .then(
        result => {
            console.log(result)
            return promise1()
    })
    .then(
        result => {
            console.log(result)
        }
    )
    .catch(
        err => {
            console.log(err)
        }
    )
            