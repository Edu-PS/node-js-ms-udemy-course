 // IMPORTANDO LA LIBRERIA http DEL ENTORNO GLOBAL
// import http from 'http'; // module
const http = require('http'); // CommonJS

// Creando la funcion que se ejecutara con cada request (DOS MANERAS DIFERENTES)
// function reqFunction (request, response) {
//     console.log(request);
// }
const reqFunction = (request, response) => {
    console.log(request);

    // Esta linea se utiliza para apagar el servidor. Esta comentada porque se quiere que siempre este corriendo.
    // process.exit();
}

// CREANDO EL SERVIDOR y proporcionando la funcion que se ejecutara cada vez que se reciba una solicitud
const server = http.createServer(reqFunction);

// DEJANDO ATENTO AL SERVIDOR A CUALQUIER REQUEST - INICIA EL SERVIDOR
// -> si se va al navegador y se ejecuta http://localhost:3000/ se vera la respuesta por el console.log(req)
server.listen(3000);
