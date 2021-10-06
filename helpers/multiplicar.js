const fs = require('fs');
const colors = require('colors');
// const crearArchivo = ( base = 5 ) => {

//     return new Promise( (res, rej ) => {
//         console.log('=======================');
//         console.log(`     Tabla del: ${ base }`);
//         console.log('=======================');
        
//         let salida = '';
    
//         for( let i = 1; i <= 10; i++ ) {
//             salida += `${ base } x ${ i } = ${ base * i }\n`;
//         }
        
//         console.log( salida );
        
//         // Con los sync toca usar try - catch
//         try {
//             fs.writeFileSync( `tabla-${ base }.txt`, salida );
//         }
//         catch(err) {
//             rej(err);
//         }
//         res(`tabla-${ base }.txt`);
        
//     });
  
    
// }

const crearArchivo = async( base = 5, listar, hasta ) => {

    if(listar) {
        console.log('======================='.blue);
        console.log(`     Tabla del: ${ base }`.bold.italic.red);
        console.log('======================='.blue);
    }
    
    
    let salida = '';

    for( let i = 1; i <= hasta; i++ ) {
        salida += `${ base } x ${ i } = ${ base * i }\n`.rainbow;
    }
    if( listar ) {
        console.log( salida );
    }    
    
    
    // Con los sync toca usar try - catch
    try {
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );
    } catch( err ) {throw err;}
    
    return(`tabla-${ base }.txt`);
    
}

module.exports = { 
    crearArchivo
};
