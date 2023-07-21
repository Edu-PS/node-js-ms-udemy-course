// Primer codigo para probar con el comando "node nombre_archivo.js" 
/* Pulsar ENTER para ejecutar.*/

import fs from 'fs';
// const fs = requiere('fs');
console.log("Primer codigo para ejecutar con NODE JS...");

fs.writeFileSync('PrimerArchivoCreado.txt', 'Primer contenido en el archivo');