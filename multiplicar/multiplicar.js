// Requires 

const fs = require('fs'); 


let listarTabla = (base, limite) => {
    for(let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base * i}\n`); 
    }
}; 


let crearArchivo = (base, limite) => {

    return new Promise( (resolve, reject) => {

        if(!Number(base)) {
            reject(`El valor de la base debe ser un número entero`);
            return; 
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
          data += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, err => {
          if (err) {
              reject(err);
          } else {
              resolve(`tabla-${base}-al-${limite}.txt`);
          }
          
        });

    })

}

module.exports = {
    crearArchivo : crearArchivo, 
    listarTabla: listarTabla
}


